import React from "react";
import styles from "./navbar.module.css";
import MenuIcon from "../Assets/Menu.svg";
import SocialMedia from "./SocialMedia/socialMedia";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img
          src={MenuIcon}
          className={`${styles.menuIcon} ${isSidebarOpen ? styles.active : ""}`}
          alt="Menu"
          onClick={toggleSidebar}
        />
        <div className={styles.logo}>Tasty, Cite Ezzouhour</div>
      </div>

      <SocialMedia />
    </nav>
  );
};

export default Navbar;
