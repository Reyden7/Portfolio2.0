import Websites from "../../views/Websites/Websites";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sites web professionnels",
  description:
    "Sites vitrines modernes, rapides et clairs pour présenter votre activité, rassurer vos visiteurs et générer des contacts.",
  alternates: {
    canonical: "/sites-internet",
    languages: {
      "fr-FR": "/sites-internet",
    },
  },
};

export default async function Page() {
  const projects = await getProjects();
  return <Websites initialProjects={projects} />;
}
