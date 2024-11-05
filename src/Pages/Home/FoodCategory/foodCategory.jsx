import React from "react";
import styles from "./foodCategory.module.css";
import { FoodCategoryHeader, MainFood } from "../../index";

const FoodCategory = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <FoodCategoryHeader />
      {/* Categories Section */}
      <MainFood />
    </div>
  );
};

export default FoodCategory;
