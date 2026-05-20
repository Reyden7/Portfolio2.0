import "./ProjectCard.css";

function ProjectCard({ project, index = 0 }) {
  return (
    <article className={`project-card ${index % 2 === 1 ? "project-card--reverse" : ""}`}>
      <a href={project.link} className="project-card__media" target="_blank" rel="noreferrer">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__placeholder">
            <span>QC</span>
          </div>
        )}
      </a>

      <div className="project-card__content">
        <p className="project-card__kicker">
          Projet {String(index + 1).padStart(2, "0")}
        </p>

        <h2>{project.title}</h2>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__techs">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a href={project.link} className="project-card__link" target="_blank" rel="noreferrer">
          Voir le projet
          <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;