import JavaScript from "../../assets/JavaScript.png";
import HTML from "../../assets/HTML5.png";
import CSS from "../../assets/CSS3.png";
import TailwindCSS from "../../assets/TailwindCSS.png";
import ReactLogo from "../../assets/React.png";
import NodeJS from "../../assets/NodeJs.png";
import Express from "../../assets/Express.png";
import PostgreSQL from "../../assets/PostgreSQL.png";
import Git from "../../assets/Git.png";
import GitHub from "../../assets/GitHub.png";
import styles from "./mySkillsSection.module.css";

export const MySkillsSection = () => {
  return (
    <section className={styles.mySkillsSection}>
      <h2 className={styles.mySkillsTitle}>Mis Skills</h2>

      <ul className={styles.skillsList}>
        <li className={styles.skillItem}>
          <img src={JavaScript} alt="JavaScript" />
          <span>JavaScript</span>
        </li>

        <li className={styles.skillItem}>
          <img src={HTML} alt="HTML5" />
          <span>HTML5</span>
        </li>

        <li className={styles.skillItem}>
          <img src={CSS} alt="CSS3" />
          <span>CSS3</span>
        </li>

        <li className={styles.skillItem}>
          <img src={TailwindCSS} alt="Tailwind CSS" />
          <span>Tailwind CSS</span>
        </li>

        <li className={styles.skillItem}>
          <img src={ReactLogo} alt="React" />
          <span>React</span>
        </li>

        <li className={styles.skillItem}>
          <img src={NodeJS} alt="Node.js" />
          <span>Node.js</span>
        </li>

        <li className={styles.skillItem}>
          <img src={Express} alt="Express" />
          <span>Express</span>
        </li>

        <li className={styles.skillItem}>
          <img src={PostgreSQL} alt="PostgreSQL" />
          <span>PostgreSQL</span>
        </li>

        <li className={styles.skillItem}>
          <img src={Git} alt="Git" />
          <span>Git</span>
        </li>

        <li className={styles.skillItem}>
          <img src={GitHub} alt="GitHub" />
          <span>GitHub</span>
        </li>
      </ul>
    </section>
  );
};
