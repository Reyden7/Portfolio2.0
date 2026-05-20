import ProjectPageLayout from "../../components/ProjectPageLayout/ProjectPageLayout";
import { websiteProjects } from "../../data/projects";

function Websites() {
  return (
    <ProjectPageLayout
      eyebrow="Sites internet"
      title="Sites web"
      description="Des sites rapides, modernes et pensés pour présenter clairement une activité, rassurer les visiteurs et générer des contacts."
      projects={websiteProjects}
    />
  );
}

export default Websites;