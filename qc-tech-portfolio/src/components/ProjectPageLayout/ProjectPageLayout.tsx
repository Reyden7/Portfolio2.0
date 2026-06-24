"use client";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProjectCard from "../ProjectCard/ProjectCard";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import usePageMeta from "../../hooks/usePageMeta";
import BackgroundShapes from "../BackgroundShapes/BackgroundShapes";

type ProjectPageLayoutProps = {
  eyebrow?: string;
  title: string;
  description: string;
  projects: any[];
};

function ProjectPageLayout({ title, description, projects }: ProjectPageLayoutProps) {
  useRevealOnScroll();

  usePageMeta({
    title,
    description,
  });

  return (
    <main className="project-page">
      <Header />
      <BackgroundShapes variant="dark" />

      <section className="project-page__hero">
        <div className="project-page__noise"></div>

        <div className="project-page__hero-inner">
          

          <h1>{title}</h1>

          <span>{description}</span>

          <div className="project-page__hero-proof">
            <strong>{projects.length}</strong>
            <small>
              {projects.length > 1 ? "projets disponibles" : "projet disponible"}
            </small>
          </div>
        </div>
      </section>

      <section className="project-page__list">
        <div className="project-page__inner">
          <div className="project-page__list-heading reveal">
            <p className="section-kicker">Réalisations</p>
            
          </div>

          {projects.length > 0 ? (
            <div className="project-page__grid">
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
          ) : (
            <div className="project-page__empty reveal">
              <p>
                Les réalisations de cette catégorie seront bientôt disponibles. En
                attendant, vous pouvez me contacter pour discuter de votre projet.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ProjectPageLayout;
