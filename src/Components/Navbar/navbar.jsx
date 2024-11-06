import React from "react";
import styles from "./navbar.module.css";
import PositionIcon from "../Assets/Position.svg";
import IceCreamIcon from "../Assets/Navbar_Ice_Cream.svg";

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
      <img
        src={IceCreamIcon}
        className={styles.iceCreamIcon}
        alt="IceCreamIcon"
      />
    </nav>
  );
};

export default Navbar;
