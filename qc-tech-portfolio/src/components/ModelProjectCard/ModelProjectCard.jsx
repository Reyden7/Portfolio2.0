import TransitionLink from "../TransitionLink/TransitionLink";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ModelProjectCard.css";

function ModelProjectCard({ project, index = 0 }) {
  return (
    <article className="model-project-card">
      <TransitionLink
        to={`/projets/${project.slug}`}
        className="model-project-card__viewer magnetic"
        ariaLabel={`Voir le projet ${project.title}`}
      >
        <ModelViewer
          modelUrl={project.model}
          fallbackImage={project.image}
          alt={project.title}
          scale={project.modelScale}
          position={project.modelPosition}
          rotation={project.modelRotation}
          autoRotate={project.autoRotate}
        />
      </TransitionLink>

      <div className="model-project-card__content">
        <p className="model-project-card__kicker">
          Modèle {String(index + 1).padStart(2, "0")} — {project.type}
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

        <TransitionLink
          to={`/projets/${project.slug}`}
          className="model-project-card__link magnetic"
        >
          Ouvrir le projet
          <span>↗</span>
        </TransitionLink>
      </div>
    </article>
  );
}

export default ModelProjectCard;