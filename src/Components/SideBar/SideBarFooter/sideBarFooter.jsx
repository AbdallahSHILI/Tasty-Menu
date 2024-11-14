import React from "react";
import styles from "./sideBarFooter.module.css";
import LinkedInIcon from "../../Assets/linkedIn.svg";
import GithubIcon from "../../Assets/github.svg";

const SideBarFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        Made with ❤️ by <i>Abdallah</i>
      </p>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/abdallahshili/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className={styles.socialIcon}
          />
        </a>
        <a
          href="https://github.com/AbdallahSHILI"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src={GithubIcon} alt="Github" className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default SideBarFooter;
