import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TransitionLink from "../../components/TransitionLink/TransitionLink";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import "./ProjectDetail.css";
import ModelViewer from "../../components/ModelViewer/ModelViewer";
import usePageMeta from "../../hooks/usePageMeta";
import useProjects from "../../hooks/useProjects";

function ProjectDetail() {
  useRevealOnScroll();

  const { slug } = useParams();
  const { projects, loading } = useProjects();

  const project = projects.find((project) => project.slug === slug);

  usePageMeta({
    title: project ? project.title : "Projet introuvable",
    description: project
      ? project.description
      : "Le projet demandé n’existe pas ou a été déplacé.",
  });

  if (loading) {
    return (
      <main className="project-detail">
        <Header />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="project-detail">
        <Header />

        <section className="project-detail__not-found">
          <p>Projet introuvable</p>
          <h1>Cette page n’existe pas.</h1>

          <TransitionLink to="/" className="project-detail__button">
            Retour à l’accueil
          </TransitionLink>
        </section>
      </main>
    );
  }

  const hasGithub = project.github && project.github !== "#";
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <main className="project-detail">
      <Header />

      <section className="project-detail__hero">
        <div className="project-detail__hero-inner">
          <p>{project.categoryLabel}</p>
          <h1>{project.title}</h1>
          <span>{project.description}</span>
        </div>
      </section>

      <section className="project-detail__body">
        <div className="project-detail__inner">
          <div
            className={`project-detail__media ${
              project.model ? "project-detail__media--model" : ""
            } ${
              project.detailMediaFit === "contain"
                ? "project-detail__media--contain"
                : ""
            }`}
          >
            {project.model ? (
              <ModelViewer
                modelUrl={project.model}
                fallbackImage={project.image}
                alt={project.title}
                scale={project.modelScale}
                position={project.modelPosition}
                rotation={project.modelRotation}
                autoRotate={project.autoRotate}
              />
            ) : project.detailVideo ? (
              <video
                src={project.detailVideo}
                poster={project.detailImage || project.image}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  maxWidth: project.detailMediaMaxWidth || "100%",
                }}
              />
            ) : project.detailImage ? (
              <img src={project.detailImage} alt={project.title} />
            ) : project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="project-detail__placeholder">
                <span>{project.type}</span>
                <strong>{project.title}</strong>
              </div>
            )}

            <div className="project-detail__status">{project.status}</div>
          </div>

          <div className="project-detail__grid">
            <article className="project-detail__panel">
              <p className="project-detail__kicker">Contexte</p>
              <h2>Le besoin</h2>
              <p>{project.context || "Aucun contexte renseigné."}</p>
            </article>

            <article className="project-detail__panel">
              <p className="project-detail__kicker">Objectif</p>
              <h2>Ce que le projet doit apporter</h2>
              <p>{project.goal || "Aucun objectif renseigné."}</p>
            </article>
          </div>

          <div className="project-detail__tech">
            <p className="project-detail__kicker">Technologies</p>

            <div className="project-detail__tech-list">
              {Array.isArray(project.technologies) &&
              project.technologies.length > 0 ? (
                project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))
              ) : (
                <span>Aucune technologie renseignée</span>
              )}
            </div>
          </div>

          <div className="project-detail__actions">
            <TransitionLink
              to={project.backPath || "/"}
              className="project-detail__button project-detail__button--ghost magnetic"
            >
              ← Retour aux projets
            </TransitionLink>

            {hasGithub && (
              <a
                href={project.github}
                className="project-detail__button project-detail__button--dark magnetic"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demo}
                className="project-detail__button magnetic"
                target="_blank"
                rel="noreferrer"
              >
                Voir la démo ↗
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ProjectDetail;