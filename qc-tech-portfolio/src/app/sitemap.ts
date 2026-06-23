import { getProjects } from "../services/projectsServer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalloom.fr";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const projects = await getProjects();
  const now = new Date();

  const staticRoutes = [
    ["", 1],
    ["/services", 0.95],
    ["/sites-internet", 0.9],
    ["/applications-logiciels", 0.85],
    ["/modelisation-3d", 0.8],
  ];

  return [
    ...staticRoutes.map(([path, priority]) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      priority,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projets/${project.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
