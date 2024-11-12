import React, { useState } from "react";
import styles from "./categoryPage.module.css";
import { useMenu } from "../../context/MenuContext";
import { menuData } from "../../data/menuData";
import { useNavigate } from "react-router-dom";
import GalerieIcon from "../../Components/Assets/Galerie.svg";
import ReturnIcon from "../../Components/Assets/Return.svg";

const CategoryPage = ({ category }) => {
  const [activeFilter, setActiveFilter] = useState("sweet");
  const currentMenu = menuData[category];
  const navigate = useNavigate();

  if (!currentMenu) return null;

  const hasSweetSavory =
    currentMenu.subcategories &&
    currentMenu.subcategories.sweet &&
    currentMenu.subcategories.savory;

  const handleReturn = () => {
    navigate(-1); // Goes back to previous page
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

      {hasSweetSavory && (
        <div className={styles.filterContainer}>
          <div className={styles.toggleWrapper}>
            <button
              className={`${styles.toggleButton} ${
                activeFilter === "sweet" ? styles.active : ""
              }`}
              onClick={() =>
                setActiveFilter(activeFilter === "sweet" ? null : "sweet")
              }
            >
              Sucré
            </button>
            <button
              className={`${styles.toggleButton} ${
                activeFilter === "savory" ? styles.active : ""
              }`}
              onClick={() =>
                setActiveFilter(activeFilter === "savory" ? null : "savory")
              }
            >
              Salé
            </button>
          </div>
        </div>
      )}

      <div className={styles.menuSection}>
        {currentMenu.subcategories ? (
          Object.entries(currentMenu.subcategories)
            .filter(([key]) => !activeFilter || key === activeFilter)
            .map(([key, subcategory]) => (
              <div key={key} className={styles.subcategoryContainer}>
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
