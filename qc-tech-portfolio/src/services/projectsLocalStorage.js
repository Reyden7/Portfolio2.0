import { projects as defaultProjects } from "../data/projects";

const STORAGE_KEY = "portfolio_projects";

export function getStoredProjects() {
  const storedProjects = localStorage.getItem(STORAGE_KEY);

  if (!storedProjects) {
    return defaultProjects;
  }

  try {
    const parsedProjects = JSON.parse(storedProjects);

    if (!Array.isArray(parsedProjects)) {
      return defaultProjects;
    }

    return parsedProjects;
  } catch {
    return defaultProjects;
  }
}

export function saveProject(newProject) {
  const currentProjects = getStoredProjects();
  const updatedProjects = [...currentProjects, newProject];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));

  return updatedProjects;
}

export function resetProjects() {
  localStorage.removeItem(STORAGE_KEY);
}