import Apps from "../../views/Apps/Apps";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Applications & logiciels",
  description:
    "Applications métier sur mesure pour automatiser les tâches, simplifier les usages et gagner du temps.",
  alternates: {
    canonical: "/applications-logiciels",
    languages: {
      "fr-FR": "/applications-logiciels",
    },
  },
};

export default async function Page() {
  const projects = await getProjects();
  return <Apps initialProjects={projects} />;
}
