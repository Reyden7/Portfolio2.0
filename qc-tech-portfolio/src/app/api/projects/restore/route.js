import {
  getSavedProjects,
  setSavedProjects,
} from "../../../../services/projectsServer";

export const dynamic = "force-dynamic";

function checkAdminPassword(request) {
  const adminPassword = request.headers.get("x-admin-password");
  return Boolean(process.env.ADMIN_PASSWORD) && adminPassword === process.env.ADMIN_PASSWORD;
}

export async function POST(request) {
  if (!checkAdminPassword(request)) {
    return Response.json({ message: "AccÃ¨s refusÃ©" }, { status: 401 });
  }

  const projects = await getSavedProjects();
  const body = await request.json();

  if (!Array.isArray(body.projects)) {
    return Response.json({ message: "Liste de projets invalide" }, { status: 400 });
  }

  const existingSlugs = new Set(projects.map((project) => project.slug));
  const projectsToAdd = body.projects.filter(
    (project) => !existingSlugs.has(project.slug)
  );
  const updatedProjects = [...projects, ...projectsToAdd];

  await setSavedProjects(updatedProjects);

  return Response.json({
    success: true,
    added: projectsToAdd.length,
    total: updatedProjects.length,
  });
}
