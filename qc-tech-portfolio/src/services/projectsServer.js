import { getStore } from "@netlify/blobs";
import { projects as defaultProjects } from "../data/projects";

export const PROJECTS_STORE_NAME = "portfolio-projects";
export const PROJECTS_KEY = "projects";
const REMOVED_PROJECT_CATEGORY = ["model", "ing"].join("");

export function getCategoryData(category) {
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

export function getVisibleProjects(projects) {
  return projects.filter((project) => project.category !== REMOVED_PROJECT_CATEGORY);
}

function getProjectsStore() {
  return getStore({
    name: PROJECTS_STORE_NAME,
    consistency: "strong",
  });
}

export async function getSavedProjects() {
  try {
    const savedProjects = await getProjectsStore().get(PROJECTS_KEY, {
      type: "json",
      consistency: "strong",
    });

    return Array.isArray(savedProjects) ? getVisibleProjects(savedProjects) : [];
  } catch (error) {
    console.warn("Netlify Blobs indisponible, projets locaux utilisÃ©s :", error);
    return [];
  }
}

export async function getProjects() {
  const savedProjects = await getSavedProjects();
  return savedProjects.length > 0
    ? getVisibleProjects(savedProjects)
    : getVisibleProjects(defaultProjects);
}

export async function setSavedProjects(projects) {
  await getProjectsStore().setJSON(PROJECTS_KEY, projects);
}

export async function getProjectBySlug(slug) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}
