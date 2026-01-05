import styles from "./aboutMeSection.module.css";
import AboutMeImg from "../../assets/fondoAboutMe.jpg";

export const AboutMeSection = () => {
  return (
    <section className={styles.aboutMeSection}>
  <div className={styles.aboutMeContent}>
    <img src={AboutMeImg} alt="" className={styles.aboutMeImg} />
    <h2 className={styles.aboutMeTitle}>SOBRE MI</h2>
  </div>

  <div className={styles.aboutMeText}>
    <p className={styles.aboutMeDescription}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <div className={styles.aboutMeButtons}>
      <button className={styles.aboutMeButton}>Descargar CV</button>
      <button className={styles.aboutMeButton2}>Skills</button>
    </div>
  </div>
</section>
  );
};
