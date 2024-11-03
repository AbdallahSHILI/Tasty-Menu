import React from "react";
import styles from "./navbar.module.css";
import PositionIcon from "../../Components/Assets/Position.svg";
import SearchIcon from "../../Components/Assets/SearchIcon.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img
          src={PositionIcon}
          className={styles.positionIcon}
          alt="PositionIcon"
        />
        <div className={styles.logo}>Tasty, Cite Ezzouhour</div>
      </div>
      <img src={SearchIcon} className={styles.searchIcon} alt="SearchIcon" />
    </nav>
  );
};

export default Navbar;
