import Modeling3D from "../../views/Modeling3D/Modeling3D";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "ModÃ©lisation 3D",
  description:
    "Création et intégration de modèles 3D interactifs pour enrichir une expérience web, présenter un produit ou créer un effet mémorable.",
};

export default async function Page() {
  const projects = await getProjects();
  return <Modeling3D initialProjects={projects} />;
}
