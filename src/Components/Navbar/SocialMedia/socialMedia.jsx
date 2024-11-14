import React from "react";
import styles from "./socialMedia.module.css";
import InstagramIcon from "../../Assets/instagram.svg"; // You'll need to add these icons
import FacebookIcon from "../../Assets/Facebook.svg"; // You'll need to add these icons

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <a
        href="https://www.instagram.com/tasty_rolled_ice_cream/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <img
          src={InstagramIcon}
          alt="Instagram"
          className={styles.socialIcon}
        />
      </a>
      <a
        href="https://www.facebook.com/TastyGabes"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <img src={FacebookIcon} alt="Facebook" className={styles.socialIcon} />
      </a>
    </div>
  );
};

export default SocialMedia;
