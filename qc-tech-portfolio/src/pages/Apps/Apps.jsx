import ProjectPageLayout from "../../components/ProjectPageLayout/ProjectPageLayout";
import { appProjects } from "../../data/projects";

function Apps() {
  return (
    <ProjectPageLayout
      eyebrow="Applications / Logiciels"
      title="Applications"
      description="Des outils sur mesure pour automatiser, organiser et simplifier le quotidien d’une entreprise."
      projects={appProjects}
    />
  );
}

export default Apps;