import React from "react";
import styles from "./navbar.module.css";
import PositionIcon from "../Assets/Position.svg";
import SearchIcon from "../Assets/Search.svg";

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
