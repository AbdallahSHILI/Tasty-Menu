import React, { useState } from "react";
import styles from "./home.module.css";
import { HomeHeader, FoodCategory, Menu, Supplement } from "../index";
import { menuData } from "../../data/menuData";

const Home = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  const shouldShowSupplement = () => {
    if (!categoryId) return false;

    const currentMenu = menuData[categoryId];

    // Check for subcategories (sweet/savory toggle)
    if (currentMenu?.subcategories && selectedSubcategory) {
      return ["sweet", "savory"].includes(selectedSubcategory);
    }

    // Check for subcat property (SweetOnly/SavoryOnly)
    if (currentMenu?.subcat) {
      return ["SweetOnly", "SavoryOnly"].includes(currentMenu.subcat);
    }

    return false;
  };

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
      {shouldShowSupplement() && (
        <Supplement
          subcategory={
            selectedSubcategory ||
            (menuData[categoryId]?.subcat === "SweetOnly"
              ? "sweet"
              : menuData[categoryId]?.subcat === "SavoryOnly"
              ? "savory"
              : null)
          }
        />
      )}
    </div>
  );
};

export default Home;
