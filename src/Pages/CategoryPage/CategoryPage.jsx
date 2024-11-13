import React, { useState } from "react";
import styles from "./categoryPage.module.css";
import { useMenu } from "../../context/MenuContext";
import { menuData } from "../../data/menuData";
import { useNavigate } from "react-router-dom";
import GalerieIcon from "../../Components/Assets/Galerie.svg";
import ReturnIcon from "../../Components/Assets/Return.svg";

const CategoryPage = ({ category }) => {
  const currentMenu = menuData[category];
  const navigate = useNavigate();

  const defaultSubcategory = currentMenu?.subcategories
    ? Object.keys(currentMenu.subcategories)[0]
    : null;
  const [activeSubcategory, setActiveSubcategory] =
    useState(defaultSubcategory);
  const [activeFilter, setActiveFilter] = useState(null);

  if (!currentMenu) return null;

  const subcategoryKeys = currentMenu.subcategories
    ? Object.keys(currentMenu.subcategories)
    : [];
  const hasSubcategories = subcategoryKeys.length > 0;

  const currentSubcategory = hasSubcategories
    ? currentMenu.subcategories[activeSubcategory || subcategoryKeys[0]]
    : null;

  const handleReturn = () => {
    navigate(-1);
  };

  const handleSubcategoryChange = (subcategory) => {
    setActiveSubcategory(subcategory);
    setActiveFilter(null);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <div
          className={styles.headerImage}
          style={{
            backgroundImage: `url(${currentMenu.headerImage})`,
          }}
        ></div>
        <div className={styles.navigationHeader}>
          <img
            src={ReturnIcon}
            alt="Return"
            className={styles.returnIcon}
            onClick={handleReturn}
          />
          <h1 className={styles.categoryTitle}>{currentMenu.category}</h1>
          <img src={GalerieIcon} alt="Galerie" className={styles.galerieIcon} />
        </div>
      </div>

      {hasSubcategories && (
        <div className={styles.filterContainer}>
          <div className={styles.toggleWrapper}>
            {subcategoryKeys.map((key) => (
              <button
                key={key}
                className={`${styles.toggleButton} ${
                  activeSubcategory === key ? styles.active : ""
                }`}
                onClick={() => handleSubcategoryChange(key)}
              >
                {currentMenu.subcategories[key].title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.menuSection}>
        {currentMenu.subcategories ? (
          currentSubcategory && (
            <div className={styles.subcategoryContainer}>
              <div className={styles.itemsGrid}>
                {currentSubcategory.items.map((item) => (
                  <div key={item.id} className={styles.menuItem}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.price}>{item.price} DT</p>
                    {item.ingredients && (
                      <p className={styles.ingredients}>{item.ingredients}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        ) : (
          <div className={styles.itemsGrid}>
            {currentMenu.items.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.price}>{item.price} DT</p>
                {item.ingredients && (
                  <p className={styles.ingredients}>{item.ingredients}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
