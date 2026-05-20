import ModelViewer from "../ModelViewer/ModelViewer";
import "./ModelProjectCard.css";

function ModelProjectCard({ project, index = 0 }) {
  return (
    <article className="model-project-card">
      <a
        className="model-project-card__viewer"
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Voir le projet ${project.title}`}
      >
        <ModelViewer modelUrl={project.model} />
      </a>

      <div className="model-project-card__content">
        <p className="model-project-card__kicker">
          Modèle {String(index + 1).padStart(2, "0")}
        </p>

        <h2>{project.title}</h2>

        <p className="model-project-card__description">
          {project.description}
        </p>

        <div className="model-project-card__techs">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a
          href={project.link}
          className="model-project-card__link"
          target="_blank"
          rel="noreferrer"
        >
          Ouvrir le projet
          <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default ModelProjectCard;