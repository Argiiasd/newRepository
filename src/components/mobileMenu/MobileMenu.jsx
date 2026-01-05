import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import linkedinIcon from "../../assets/linkedin.png";
import gmailIcon from "../../assets/gmail.png";
import styles from "./mobileMenu.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.nav}>
      <p className={styles.navTitle}>&lt; /&gt; Mateo</p>
      <div className={styles.menuContainer}>
        <button className={styles.navContactButton}>Contacto</button>
        <MenuIcon onClick={toggleMenu} sx={{fontSize: 30}}/>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.closeButtonContainer}>
          <p className={styles.openMenuTitle}>&lt; /&gt; Mateo</p>
          <button onClick={toggleMenu} className={styles.closeButton}>
            Cerrar <CloseIcon />
          </button>
        </div>

        <div className={styles.buttonsContainer}>
          <button className={styles.menuButton}>Inicio</button>
          <button className={styles.menuButton}>Sobre Mi</button>
          <button className={styles.menuButton}>Skills</button>
          <button className={styles.menuButton}>Proyectos</button>
          <button className={styles.menuButton}>Contacto</button>
        </div>

        <div className={styles.langContainer}>
          <div className={styles.langContainer2}>
            <p>IDIOMA</p>
            <div className={styles.langOptionsContainer}>
              <button className={styles.langOption}>ESPAÑOL</button>
              <button className={styles.langOption}>INGLÉS</button>
            </div>
          </div>
          <div className={styles.iconsContainer}>
            <div className={styles.iconContainer}>
              <a
                href="https://www.linkedin.com/in/mateo-jeremias-pg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  className={styles.icon}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className={styles.iconContainer}>
              <a
                href="mailto:mateo.p.giacosa@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Mateo,"
                aria-label="Enviar email"
              >
                <img src={gmailIcon} className={styles.icon} alt="Gmail" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
