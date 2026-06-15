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
      eyebrow="Sites vitrines"
      title="Des sites web pensés pour inspirer confiance"
      description="Votre site n’est pas seulement une vitrine. C’est souvent le premier point de contact avec vos futurs clients. Nous concevons des sites modernes, rapides et structurés pour présenter clairement votre activité, rassurer vos visiteurs et les guider vers l’action."
      projects={websiteProjects}
    />
  );
}

export default Websites;