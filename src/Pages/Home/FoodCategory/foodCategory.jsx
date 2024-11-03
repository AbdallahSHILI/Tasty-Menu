import React from "react";
import styles from "./foodCategory.module.css";

const FoodCategory = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2 className={styles.title}>Food Category</h2>
        <div className={styles.seeMore}>
          <span>See More</span>
          icon
        </div>
      </div>

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
