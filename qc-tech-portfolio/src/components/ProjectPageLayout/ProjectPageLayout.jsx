import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectPageLayout.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import useMagneticElements from "../../hooks/useMagneticElements";

function ProjectPageLayout({ eyebrow, title, description, projects }) {
    useRevealOnScroll();
    useMagneticElements();
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
            <div
            className="reveal"
            key={project.id}
            data-reveal-direction={index % 2 === 0 ? "left" : "right"}
            data-reveal-delay={index * 90}
            >
            <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ProjectPageLayout;