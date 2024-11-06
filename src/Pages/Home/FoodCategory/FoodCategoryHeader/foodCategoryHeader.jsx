import React from "react";
import styles from "./foodCategoryHeader.module.css";
import seeMoreIcon from "../../../../Components/Assets/SeeMoreIcon.svg";

const foodCategoryHeader = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Food Category</h2>
    </div>
  );
};

export default foodCategoryHeader;
