import React, { useState } from "react";
import styles from "./categoryPage.module.css";
import { useMenu } from "../../context/MenuContext";
import { menuData } from "../../data/menuData";
import SucreIcon from "../../Components/Assets/SucéIcon.svg";
import SaleIcon from "../../Components/Assets/SaléIcon.svg";

const CategoryPage = ({ category }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const currentMenu = menuData[category];

  if (!currentMenu) return null;

  const hasSweetSavory =
    currentMenu.subcategories &&
    currentMenu.subcategories.sweet &&
    currentMenu.subcategories.savory;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.categoryTitle}>{currentMenu.category}</h1>
      </div>

      {hasSweetSavory && (
        <div className={styles.filterContainer}>
          <div
            className={`${styles.filterIcon} ${
              activeFilter === "sweet" ? styles.active : ""
            }`}
            onClick={() =>
              setActiveFilter(activeFilter === "sweet" ? null : "sweet")
            }
            title="Sucré"
          >
            <img src={SucreIcon} alt="Sucré" />
          </div>
          <div
            className={`${styles.filterIcon} ${
              activeFilter === "savory" ? styles.active : ""
            }`}
            onClick={() =>
              setActiveFilter(activeFilter === "savory" ? null : "savory")
            }
            title="Salé"
          >
            <img src={SaleIcon} alt="Salé" />
          </div>
        </div>
      )}

      <div className={styles.menuSection}>
        {currentMenu.subcategories ? (
          Object.entries(currentMenu.subcategories)
            .filter(([key]) => !activeFilter || key === activeFilter)
            .map(([key, subcategory]) => (
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
            ))
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
