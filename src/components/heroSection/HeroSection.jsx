import styles from "./heroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Mateo J. Pinto</h1>
        <h2 className={styles.heroSubtitle}>Soluciones web a medida</h2>
        <p className={styles.heroDescription}>
          Desarrollador web especializado en la creación de aplicaciones
          modernas, escalables y orientadas al usuario.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.heroButton}>Descargar CV</button>
          <button className={styles.heroButton2}>Sobre Mi</button>
        </div>
      </div>
    </section>
  );
};
