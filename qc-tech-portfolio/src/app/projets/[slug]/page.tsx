import ProjectDetail from "../../../views/ProjectDetail/ProjectDetail";
import { getProjectBySlug, getProjects } from "../../../services/projectsServer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalloom.fr";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const path = `/projets/${slug}`;

  return {
    title: project ? project.title : "Projet introuvable",
    description: project
      ? project.description
      : "Le projet demandé n'existe pas ou a été déplacé.",
    alternates: {
      canonical: path,
      languages: {
        "fr-FR": path,
      },
    },
    openGraph: {
      title: project?.title,
      description: project?.description,
      url: `${siteUrl}${path}`,
      images: project?.image ? [project.image] : undefined,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const projects = await getProjects();
  return <ProjectDetail slug={slug} initialProjects={projects} />;
}
