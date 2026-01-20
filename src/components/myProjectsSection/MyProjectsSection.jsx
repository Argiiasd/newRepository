import { ProjectCard } from "../projectCard/ProjectCard";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.jpg";
import styles from "./myProjectsSection.module.css";

export const MyProjectsSection = () => {
  return (
    <section className={styles.myProjectsSection}>
      <h2 className={styles.myProjectsSectionTitle}>My Projects</h2>
      <div className={styles.myProjectsSectionGrid}>
        <ProjectCard
          project={{
            image: project5,
            title: "Testimonial CMS",
            description:
              "Un CMS especializado en gestionar, moderar y publicar testimonios reales con texto, imágenes y videos — diseñado para instituciones educativas y empresas EdTech. En este proyecto trabajé como desarrollador Backend utilizando Node.js y Express.",
            url: "https://testimonial-cms-main.vercel.app",
            github:
              "https://github.com/leonasturizaga/NCs1125e44?tab=readme-ov-file",
          }}
        />
        <ProjectCard
          project={{
            image: project3,
            title: "HTML & CSS Card Design",
            description:
              "Diseño de tarjeta creado con HTML y CSS puro, enfocados en la práctica de maquetación y estilos.",
            url: "https://frontendpractice3mjpg.netlify.app",
            github: "https://github.com/Argiiasd/Blog-Preview-Card",
          }}
        />
        <ProjectCard
          project={{
            image: project2,
            title: "Social Links Profile",
            description:
              "Diseño de perfil de enlaces sociales creado con HTML y CSS puro.",
            url: "https://frontendpractice2mjpg.netlify.app",
            github: "https://github.com/Argiiasd/Social-Links-Profile",
          }}
        />
        <ProjectCard
          project={{
            image: project1,
            title: "CNC Expert Landing Page",
            description:
              "Landing page para la presentación de un proyecto CNC de estudiantes de mi ciudad, creada con React.",
            url: "https://cncexpert.netlify.app",
            github: "https://github.com/Argiiasd/CNC_Expert_Landing_Page",
          }}
        />
      </div>
      <button className={styles.myProjectsSectionSpan}>Hablemos.</button>
    </section>
  );
};
