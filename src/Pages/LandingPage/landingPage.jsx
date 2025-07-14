import React from "react";
import { useNavigate } from "react-router-dom";
import iceAppleFight from "../../Components/Assets/iceCream_apple_fight.gif";
import TastyBlackLogo from "../../Components/Assets/Tasty_BlackLogo.png";
import MenuLogo from "../../Components/Assets/Menu_LandingPage_Logo.svg";
import styles from "./landingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/Home");
  };

  return (
    <div className={styles.landingContainer}>
      <img
        src={iceAppleFight}
        alt="Ice cream apple fight"
        className={styles.landingImage}
      />
      <img src={TastyBlackLogo} alt="TastyBlackLogo" className={styles.logo} />

      <button
        className={styles.menuButton}
        onClick={handleMenuClick}
        aria-label="Explore our menu"
      >
        <span className={styles.buttonText}>Explore Menu</span>
        <img src={MenuLogo} alt="Menu icon" className={styles.buttonIcon} />
      </button>
    </div>
  );
};

export default LandingPage;
