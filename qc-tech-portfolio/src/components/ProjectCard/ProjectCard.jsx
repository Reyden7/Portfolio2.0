import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ project, index = 0 }) {
  const [hasImageError, setHasImageError] = useState(false);
  const hasImage = project.image && !hasImageError;

  return (
    <article
      className={`project-card ${
        index % 2 === 1 ? "project-card--reverse" : ""
      }`}
    >
      <a
        href={project.link || "#"}
        className="project-card__media"
        target={project.link && project.link !== "#" ? "_blank" : undefined}
        rel={project.link && project.link !== "#" ? "noreferrer" : undefined}
        aria-label={`Voir le projet ${project.title}`}
        onClick={(event) => {
            if (!project.link || project.link === "#") event.preventDefault();
        }}
        >
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="project-card__placeholder">
            <span>{project.type || "Projet"}</span>
            <strong>{project.title}</strong>
          </div>
        )}

        <div className="project-card__badge">
          {project.status || "Projet"}
        </div>
      </a>

      <div className="project-card__content">
        <p className="project-card__kicker">
          Projet {String(index + 1).padStart(2, "0")} — {project.type}
        </p>

        <h2>{project.title}</h2>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__techs">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a
        href={project.link || "#"}
        className="project-card__link"
        target={project.link && project.link !== "#" ? "_blank" : undefined}
        rel={project.link && project.link !== "#" ? "noreferrer" : undefined}
        onClick={(event) => {
            if (!project.link || project.link === "#") event.preventDefault();
        }}
        >
          Voir le projet
          <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;