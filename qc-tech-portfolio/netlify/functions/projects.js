import { getStore } from "@netlify/blobs";

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getCategoryData(category) {
  if (category === "websites") {
    return {
      categoryLabel: "Sites internet",
      backPath: "/sites-internet",
    };
  }

  if (category === "apps") {
    return {
      categoryLabel: "Applications / Logiciels",
      backPath: "/applications-logiciels",
    };
  }

  return {
    categoryLabel: "Projet",
    backPath: "/",
  };
}

const REMOVED_PROJECT_CATEGORY = ["model", "ing"].join("");

function getVisibleProjects(projects) {
  return projects.filter((project) => project.category !== REMOVED_PROJECT_CATEGORY);
}

function checkAdminPassword(request) {
  const adminPassword = request.headers.get("x-admin-password");
  return adminPassword === process.env.ADMIN_PASSWORD;
}

export default async function handler(request) {
  const url = new URL(request.url);
  const action = url.pathname.split("/").pop();

  const store = getStore({
    name: "portfolio-projects",
    consistency: "strong",
  });

  const savedProjects = await store.get("projects", {
    type: "json",
    consistency: "strong",
  });

  const projects = Array.isArray(savedProjects)
    ? getVisibleProjects(savedProjects)
    : [];

  if (request.method === "GET") {
    return jsonResponse(projects);
  }

  if (!checkAdminPassword(request)) {
    return jsonResponse({ message: "Accès refusé" }, 401);
  }

  if (request.method === "POST" && action === "restore") {
    const body = await request.json();

    if (!Array.isArray(body.projects)) {
      return jsonResponse({ message: "Liste de projets invalide" }, 400);
    }

    const existingSlugs = new Set(projects.map((project) => project.slug));

    const projectsToAdd = getVisibleProjects(body.projects).filter(
      (project) => !existingSlugs.has(project.slug)
    );

    const updatedProjects = [...projects, ...projectsToAdd];

    await store.setJSON("projects", updatedProjects);

    return jsonResponse({
      success: true,
      added: projectsToAdd.length,
      total: updatedProjects.length,
    });
  }

  if (request.method === "POST") {
    const newProject = await request.json();

    const finalProject = {
      ...newProject,
      ...getCategoryData(newProject.category),
      id: newProject.id || `${newProject.category}-${Date.now()}`,
    };

    const updatedProjects = [...projects, finalProject];

    await store.setJSON("projects", updatedProjects);

    return jsonResponse(finalProject, 201);
  }

  if (request.method === "PUT") {
    const updatedProject = await request.json();

    if (!updatedProject.id) {
      return jsonResponse({ message: "ID du projet manquant" }, 400);
    }

    const projectExists = projects.some(
      (project) => project.id === updatedProject.id
    );

    if (!projectExists) {
      return jsonResponse({ message: "Projet introuvable" }, 404);
    }

    const finalProject = {
      ...updatedProject,
      ...getCategoryData(updatedProject.category),
    };

    const updatedProjects = projects.map((project) =>
      project.id === finalProject.id ? finalProject : project
    );

    await store.setJSON("projects", updatedProjects);

    return jsonResponse(finalProject);
  }

  if (request.method === "DELETE") {
    const { id } = await request.json();

    if (!id) {
      return jsonResponse({ message: "ID du projet manquant" }, 400);
    }

    const updatedProjects = projects.filter((project) => project.id !== id);

    await store.setJSON("projects", updatedProjects);

    return jsonResponse({ success: true, id });
  }

  return jsonResponse({ message: "Méthode non autorisée" }, 405);
}
