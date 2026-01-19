import React from "react";
import styles from "./foodCategoryHeader.module.css";

const foodCategoryHeader = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Food Category</h2>
    </div>
  );
};

export default foodCategoryHeader;
