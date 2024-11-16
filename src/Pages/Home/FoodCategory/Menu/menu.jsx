import React, { useState, useEffect } from "react";
import styles from "./menu.module.css";
import { useMenu } from "../../../../context/MenuContext";
import { menuData } from "../../../../data/menuData";
import GalerieIcon from "../../../../Components/Assets/Galerie.svg";
import FoodPic from "../../../../Components/Modal/foodPic";

const Menu = () => {
  const { selectedCategory } = useMenu();
  const currentMenu = menuData[selectedCategory];

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentMenu?.subcategories) {
      const firstSubcategory = Object.keys(currentMenu.subcategories)[0];
      setSelectedSubcategory(firstSubcategory);
    }
  }, [selectedCategory, currentMenu]);

  if (!currentMenu) return null;

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <div key={item.id} className={styles.menuItem}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemName}>{item.name}</h3>
          <span className={styles.price}>{item.price} DT</span>
        </div>
        {item.ingredients && (
          <p className={styles.ingredients}>{item.ingredients}</p>
        )}
      </div>
    ));
  };

  const currentSubcategoryItems =
    currentMenu.subcategories?.[selectedSubcategory]?.items;

  const handleGalleryClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.categoryTitle}>{currentMenu.category}</h2>
        <img
          src={GalerieIcon}
          alt="Galerie"
          className={styles.galerieIcon}
          onClick={handleGalleryClick}
        />
      </div>

      {currentMenu.subcategories && (
        <div className={styles.filterContainer}>
          <div className={styles.toggleWrapper}>
            {Object.entries(currentMenu.subcategories).map(
              ([key, subcategory]) => (
                <button
                  key={key}
                  className={`${styles.toggleButton} ${
                    selectedSubcategory === key ? styles.active : ""
                  }`}
                  onClick={() => setSelectedSubcategory(key)}
                >
                  {subcategory.title}
                </button>
              )
            )}
          </div>
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
