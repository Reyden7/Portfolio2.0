import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectPageLayout.css";

function ProjectPageLayout({ eyebrow, title, description, projects }) {
  return (
    <main className="project-page">
      <Header />

      <section className="project-page__hero">
        <div className="project-page__hero-inner">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      </section>

      <section className="project-page__list">
        <div className="project-page__inner">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ProjectPageLayout;