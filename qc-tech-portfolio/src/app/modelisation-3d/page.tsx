import Modeling3D from "../../views/Modeling3D/Modeling3D";
import { getProjects } from "../../services/projectsServer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Modélisation 3D",
  description:
    "Création et intégration de modèles 3D interactifs pour présenter un produit ou enrichir une expérience web.",
  alternates: {
    canonical: "/modelisation-3d",
    languages: {
      "fr-FR": "/modelisation-3d",
    },
  },
};

export default async function Page() {
  const projects = await getProjects();
  return <Modeling3D initialProjects={projects} />;
}
