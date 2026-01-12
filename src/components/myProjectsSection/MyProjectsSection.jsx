import { ProjectCard } from "../projectCard/ProjectCard";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.png";
import styles from "./myProjectsSection.module.css";

export const MyProjectsSection = () => {
  return (
    <section className={styles.myProjectsSection}>
      <h2 className={styles.myProjectsSectionTitle}>My Projects</h2>
      <div className={styles.myProjectsSectionGrid}>
        <ProjectCard
          project={{
            image: project4,
            title: "Proyecto Cuatro",
            description: "Descripción del Proyecto Cuatro.",
          }}
        />
        <ProjectCard
          project={{
            image: project3,
            title: "Proyecto Tres",
            description: "Descripción del Proyecto Tres.",
          }}
        />
        <ProjectCard
          project={{
            image: project2,
            title: "Proyecto Dos",
            description: "Descripción del Proyecto Dos.",
          }}
        />
        <ProjectCard
          project={{
            image: project1,
            title: "Proyecto Uno",
            description: "Descripción del Proyecto Uno.",
          }}
        />
      </div>
    </section>
  );
};
