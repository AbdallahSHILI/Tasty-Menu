import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./menu.module.css";
import { useMenu } from "../../../../context/MenuContext";
import { menuData } from "../../../../data/menuData";
import GalerieIcon from "../../../../Components/Assets/Galerie.svg";
import FoodPic from "../../../../Components/Modal/foodPic";

const Menu = ({ onSubcategoryChange }) => {
  const { selectedCategory } = useMenu();
  const currentMenu = menuData[selectedCategory];

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Only reset to first subcategory when category changes, not on every render
    if (currentMenu?.subcategories) {
      const firstSubcategory = Object.keys(currentMenu.subcategories)[0];

      // Only set if this is initial mount or category actually changed
      if (isInitialMount.current) {
        setSelectedSubcategory(firstSubcategory);
        onSubcategoryChange(firstSubcategory, selectedCategory);
        isInitialMount.current = false;
      }
    } else {
      setSelectedSubcategory(null);
      onSubcategoryChange(null, selectedCategory);
    }
  }, [selectedCategory]); // Remove currentMenu and onSubcategoryChange from dependencies

  // Reset the ref when category changes
  useEffect(() => {
    isInitialMount.current = true;
  }, [selectedCategory]);

  // Add debounced resize handler
  const debouncedResizeHandler = useCallback(() => {
    let timeoutId = null;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    };
  }, []);

  // Add resize observer effect
  useEffect(() => {
    const resizeHandler = debouncedResizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [debouncedResizeHandler]);

  if (!currentMenu) return null;

  const handleSubcategoryChange = (key) => {
    setSelectedSubcategory(key);
    onSubcategoryChange(key, selectedCategory);
  };

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <div key={item.id} className={styles.menuItem}>
        <div className={styles.itemHeader}>
          <h3 className={`${styles.itemName} notranslate`} translate="no">
            {item.name}
          </h3>
          <span className={styles.price}>{item.price}</span>
        </div>
        {item.ingredients && (
          <p className={styles.ingredients}>{item.ingredients}</p>
        )}
      </div>
    ));
  };

  const currentSubcategoryItems =
    currentMenu.subcategories?.[selectedSubcategory]?.items;

  return (
    <div className={styles.menuContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.categoryTitle}>{currentMenu.category}</h2>
        <img
          src={GalerieIcon}
          alt="Galerie"
          className={styles.galerieIcon}
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {currentMenu.subcategories && (
        <div className={styles.filterContainer}>
          {["sweet", "savory", "chocolat", "naturel", "other"].includes(
            selectedSubcategory,
          ) &&
            Object.keys(currentMenu.subcategories).length > 1 && (
              <div className={styles.toggleWrapper}>
                {Object.entries(currentMenu.subcategories).map(
                  ([key, subcategory]) => (
                    <button
                      key={key}
                      className={`${styles.toggleButton} ${
                        selectedSubcategory === key ? styles.active : ""
                      }`}
                      onClick={() => handleSubcategoryChange(key)}
                    >
                      {subcategory.title}
                    </button>
                  ),
                )}
              </div>
            )}
        </div>
      )}

      <div className={styles.menuItems}>
        {currentMenu.subcategories
          ? currentSubcategoryItems && renderMenuItems(currentSubcategoryItems)
          : renderMenuItems(currentMenu.items)}
      </div>

      <FoodPic
        images={currentMenu.ModalImages}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Menu;
