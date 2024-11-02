import React from "react";
import styles from "./home.module.css";
import TastyLogo from "../../../Components/Assets/TastyLogo.jpeg";

const HomeHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <img
        src={TastyLogo} // Replace with your image path
        alt="Header Banner"
        className={styles.headerImage}
      />
    </div>
  );
};

export default HomeHeader;
