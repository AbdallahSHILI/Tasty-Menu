import React from "react";
import styles from "./categoryPage.module.css";
import { useMenu } from "../../context/MenuContext";
import { menuData } from "../../data/menuData";

const CategoryPage = () => {
  const { selectedCategory } = useMenu();
  const currentMenu = menuData[selectedCategory];

  if (!currentMenu) return null;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.categoryTitle}>{currentMenu.category}</h1>
        <div className={styles.imageContainer}>
          <img
            src={currentMenu.icon}
            alt={currentMenu.category}
            className={styles.categoryImage}
          />
        </div>
      </div>

      <div className={styles.menuSection}>
        {currentMenu.subcategories ? (
          Object.entries(currentMenu.subcategories).map(
            ([key, subcategory]) => (
              <div key={key} className={styles.subcategoryContainer}>
                <h2 className={styles.subcategoryTitle}>{subcategory.title}</h2>
                <div className={styles.itemsGrid}>
                  {subcategory.items.map((item) => (
                    <div key={item.id} className={styles.menuItem}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <p className={styles.price}>{item.price} DT</p>
                      <p className={styles.ingredients}>{item.ingredients}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )
        ) : (
          <div className={styles.itemsGrid}>
            {currentMenu.items.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.price}>{item.price} DT</p>
                <p className={styles.ingredients}>{item.ingredients}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
