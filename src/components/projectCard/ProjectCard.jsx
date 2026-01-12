import styles from "./projectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectCardImage}
        />
      </div>

      <h3 className={styles.projectCardTitle}>{project.title}</h3>
      <p className={styles.projectCardDescription}>{project.description}</p>
    </div>
  );
};
