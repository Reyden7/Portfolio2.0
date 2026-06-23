import {
  getCategoryData,
  getSavedProjects,
  setSavedProjects,
} from "../../../services/projectsServer";

export const dynamic = "force-dynamic";

function jsonResponse(data, status = 200) {
  return Response.json(data, { status });
}

function checkAdminPassword(request) {
  const adminPassword = request.headers.get("x-admin-password");
  return Boolean(process.env.ADMIN_PASSWORD) && adminPassword === process.env.ADMIN_PASSWORD;
}

export async function GET() {
  const projects = await getSavedProjects();
  return jsonResponse(projects);
}

export async function POST(request) {
  if (!checkAdminPassword(request)) {
    return jsonResponse({ message: "AccÃ¨s refusÃ©" }, 401);
  }

  const projects = await getSavedProjects();
  const newProject = await request.json();

  const finalProject = {
    ...newProject,
    ...getCategoryData(newProject.category),
    id: newProject.id || `${newProject.category}-${Date.now()}`,
  };

  await setSavedProjects([...projects, finalProject]);

  return jsonResponse(finalProject, 201);
}

export async function PUT(request) {
  if (!checkAdminPassword(request)) {
    return jsonResponse({ message: "AccÃ¨s refusÃ©" }, 401);
  }

  const projects = await getSavedProjects();
  const updatedProject = await request.json();

  if (!updatedProject.id) {
    return jsonResponse({ message: "ID du projet manquant" }, 400);
  }

  if (!projects.some((project) => project.id === updatedProject.id)) {
    return jsonResponse({ message: "Projet introuvable" }, 404);
  }

  const finalProject = {
    ...updatedProject,
    ...getCategoryData(updatedProject.category),
  };

  await setSavedProjects(
    projects.map((project) =>
      project.id === finalProject.id ? finalProject : project
    )
  );

  return jsonResponse(finalProject);
}

export async function DELETE(request) {
  if (!checkAdminPassword(request)) {
    return jsonResponse({ message: "AccÃ¨s refusÃ©" }, 401);
  }

  const projects = await getSavedProjects();
  const { id } = await request.json();

  if (!id) {
    return jsonResponse({ message: "ID du projet manquant" }, 400);
  }

  await setSavedProjects(projects.filter((project) => project.id !== id));

  return jsonResponse({ success: true, id });
}
