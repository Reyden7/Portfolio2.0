import Websites from "../../views/Websites/Websites";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Des sites web pensés pour inspirer confiance",
  description:
    "Votre site n'est pas seulement une vitrine. C'est souvent le premier point de contact avec vos futurs clients.",
};

export default async function Page() {
  const projects = await getProjects();
  return <Websites initialProjects={projects} />;
}
