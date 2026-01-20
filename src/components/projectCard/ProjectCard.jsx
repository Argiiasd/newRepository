import styles from "./projectCard.module.css";

export const ProjectCard = ({ project }) => {
  const goToProject = () => {
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={styles.projectCard}
      onClick={goToProject}
      role="link"
      tabIndex={0}
    >
      <div className={styles.projectCardImageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectCardImage}
        />
      </div>

      <h3 className={styles.projectCardTitle}>{project.title}</h3>
      <p className={styles.projectCardDescription}>{project.description}</p>

      {project.github && (
        <div className={styles.projectCardActions}>
          <button
            className={styles.projectCardActionButton}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      )}
    </div>
  );
};
