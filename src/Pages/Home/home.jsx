import React, { useState } from "react";
import styles from "./home.module.css";
import { HomeHeader, FoodCategory, Menu, Supplement } from "../index";
import { menuData } from "../../data/menuData";

const Home = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  return (
    <div className={styles.container}>
      <HomeHeader />
      <FoodCategory />
      <Menu
        onSubcategoryChange={(subcategory, category) => {
          setSelectedSubcategory(subcategory);
          setCategoryId(category);
        }}
      />
      {selectedSubcategory &&
        categoryId &&
        menuData[categoryId].subcategories && (
          <Supplement
            subcategory={selectedSubcategory}
            categoryId={categoryId}
          />
        )}
    </div>
  );
};

export default Home;
