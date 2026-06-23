import Websites from "../../views/Websites/Websites";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Des sites web pensÃ©s pour inspirer confiance",
  description:
    "Votre site nâ€™est pas seulement une vitrine. Câ€™est souvent le premier point de contact avec vos futurs clients.",
};

export default async function Page() {
  const projects = await getProjects();
  return <Websites initialProjects={projects} />;
}
