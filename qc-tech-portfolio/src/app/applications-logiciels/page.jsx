import Apps from "../../views/Apps/Apps";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Applications & logiciels",
  description:
    "Des applications et outils sur mesure pensés pour simplifier les usages, automatiser les tâches et améliorer l'efficacité.",
};

export default async function Page() {
  const projects = await getProjects();
  return <Apps initialProjects={projects} />;
}
