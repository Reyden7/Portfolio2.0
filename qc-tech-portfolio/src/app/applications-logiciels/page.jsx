import Apps from "../../views/Apps/Apps";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Applications & logiciels",
  description:
    "Des applications et outils sur mesure pensÃ©s pour simplifier les usages, automatiser les tÃ¢ches et amÃ©liorer lâ€™efficacitÃ©.",
};

export default async function Page() {
  const projects = await getProjects();
  return <Apps initialProjects={projects} />;
}
