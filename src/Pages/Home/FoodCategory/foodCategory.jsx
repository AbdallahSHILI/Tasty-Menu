import React from "react";
import styles from "./foodCategory.module.css";
import { FoodCategoryHeader } from "../../index";

const FoodCategory = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <FoodCategoryHeader />
      {/* Categories Section */}
      <div className={styles.categories}>
        <div className={styles.categoryItem}>
          <div className={styles.iconWrapper}>icon</div>
          <span>Pizza</span>
        </div>

        <div className={styles.categoryItem}>
          <div className={styles.iconWrapper}>iconn</div>
          <span>Soup</span>
        </div>

        {/* Add more categories as needed */}
      </div>
    </div>
  );
};

export default FoodCategory;
