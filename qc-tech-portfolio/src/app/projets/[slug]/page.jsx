import ProjectDetail from "../../../views/ProjectDetail/ProjectDetail";
import { getProjectBySlug, getProjects } from "../../../services/projectsServer";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return {
    title: project ? project.title : "Projet introuvable",
    description: project
      ? project.description
      : "Le projet demandÃ© nâ€™existe pas ou a Ã©tÃ© dÃ©placÃ©.",
    openGraph: {
      title: project?.title,
      description: project?.description,
      images: project?.image ? [project.image] : undefined,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const projects = await getProjects();
  return <ProjectDetail slug={slug} initialProjects={projects} />;
}
