import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TransitionLink from "../../components/TransitionLink/TransitionLink";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { getProjectBySlug } from "../../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  useRevealOnScroll();

  const { slug } = useParams();
  const project = getProjectBySlug(slug);

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
          <div className="project-detail__media reveal">
            {project.image ? (
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
            <article className="project-detail__panel reveal">
              <p className="project-detail__kicker">Contexte</p>
              <h2>Le besoin</h2>
              <p>{project.context}</p>
            </article>

            <article className="project-detail__panel reveal">
              <p className="project-detail__kicker">Objectif</p>
              <h2>Ce que le projet doit apporter</h2>
              <p>{project.goal}</p>
            </article>
          </div>

          <div className="project-detail__tech reveal">
            <p className="project-detail__kicker">Technologies</p>

            <div className="project-detail__tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-detail__actions reveal">
            <TransitionLink to={project.backPath} className="project-detail__button project-detail__button--ghost">
              ← Retour aux projets
            </TransitionLink>

            {hasGithub && (
              <a
                href={project.github}
                className="project-detail__button project-detail__button--dark"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demo}
                className="project-detail__button"
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