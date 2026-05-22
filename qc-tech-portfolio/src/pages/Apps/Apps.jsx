import ProjectPageLayout from "../../components/ProjectPageLayout/ProjectPageLayout";
import useProjects from "../../hooks/useProjects";

function Apps() {
  const { projects, loading } = useProjects();

  const appProjects = projects.filter(
    (project) => project.category === "apps"
  );

  if (loading) {
    return null;
  }

  return (
    <ProjectPageLayout
      eyebrow="Applications / Logiciels"
      title="Applications & logiciels"
      description="Des applications et outils sur mesure pensés pour simplifier les usages, automatiser les tâches et améliorer l’efficacité."
      projects={appProjects}
    />
  );
}

export default Apps;