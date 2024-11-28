import React, { useState } from "react";
import styles from "./home.module.css";
import { HomeHeader, FoodCategory, Menu, Supplement } from "../index";

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
      {selectedSubcategory && categoryId && (
        <Supplement subcategory={selectedSubcategory} categoryId={categoryId} />
      )}
    </div>
  );
};

export default Home;
