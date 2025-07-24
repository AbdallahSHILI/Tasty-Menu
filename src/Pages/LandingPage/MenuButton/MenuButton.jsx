import React from "react";
import { useNavigate } from "react-router-dom";
import MenuLogo from "../../../Components/Assets/Menu_LandingPage_Logo.svg";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/Home");
  };

  return (
    <button
      className={styles.menuButton}
      onClick={handleMenuClick}
      aria-label="Explore our menu"
    >
      <span className={styles.buttonText}>Explore Menu</span>
      <img src={MenuLogo} alt="Menu icon" className={styles.buttonIcon} />
    </button>
  );
};

export default MenuButton;
