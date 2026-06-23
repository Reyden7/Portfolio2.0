import Modeling3D from "../../views/Modeling3D/Modeling3D";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "ModÃ©lisation 3D",
  description:
    "CrÃ©ation et intÃ©gration de modÃ¨les 3D interactifs pour enrichir une expÃ©rience web, prÃ©senter un produit ou crÃ©er un effet mÃ©morable.",
};

export default async function Page() {
  const projects = await getProjects();
  return <Modeling3D initialProjects={projects} />;
}
