"use client";

import { useState } from "react";
import TransitionLink from "../TransitionLink/TransitionLink";

function ProjectCard({ project, index = 0 }) {
  const [hasImageError, setHasImageError] = useState(false);

  const hasImage = project.image && !hasImageError;
  const technologies = project.technologies || project.tech || project.tags || [];

  return (
    <article
      className={`project-card ${
        index % 2 === 1 ? "project-card--reverse" : ""
      }`}
    >
      <div className="project-card__media">
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
      </div>

      <div className="project-card__content">
        <p className="project-card__kicker">
          Projet {String(index + 1).padStart(2, "0")} — {project.type}
        </p>

        <h2>{project.title}</h2>

        <p className="project-card__description">{project.description}</p>

        {technologies.length > 0 && (
          <div className="project-card__techs">
            {technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}

        <TransitionLink
          to={`/projets/${project.slug}`}
          className="project-card__link magnetic"
        >
          Voir le projet
          <span>↗</span>
        </TransitionLink>
      </div>
    </article>
  );
}

export default ProjectCard;