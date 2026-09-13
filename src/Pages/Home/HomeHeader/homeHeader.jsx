import React from "react";
import styles from "./home.module.css";
import TastyLogo from "../../../Components/Assets/TastyLogo.jpg";

const HomeHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={TastyLogo} alt="Header Banner" className={styles.headerImage} />
    </div>
  );
};

export default HomeHeader;
