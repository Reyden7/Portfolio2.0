import ProjectPageLayout from "../../components/ProjectPageLayout/ProjectPageLayout";
import useProjects from "../../hooks/useProjects";

function Websites() {
  const { projects, loading } = useProjects();

  const websiteProjects = projects.filter(
    (project) => project.category === "websites"
  );

  if (loading) {
    return null;
  }

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