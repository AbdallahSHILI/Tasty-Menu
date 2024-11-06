import React, { useState } from "react";
import styles from "./menu.module.css";
import { useMenu } from "../../../../context/MenuContext";
import { menuData } from "../../../../data/menuData";
import GalerieIcon from "../../../../Components/Assets/Galerie.svg"; // Adjust the path as needed

const Menu = () => {
  const { selectedCategory } = useMenu();
  const currentMenu = menuData[selectedCategory];
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    currentMenu?.subcategories
      ? Object.keys(currentMenu.subcategories)[0]
      : null
  );

  if (!currentMenu) return null;

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <div key={item.id} className={styles.menuItem}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemName}>{item.name}</h3>
          <span className={styles.price}>{item.price} DT</span>
        </div>
        <p className={styles.ingredients}>{item.ingredients}</p>
      </div>
    ));
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.categoryTitle}>{currentMenu.category}</h2>
        <img src={GalerieIcon} alt="Galerie" className={styles.galerieIcon} />
      </div>

      {currentMenu.subcategories && (
        <div className={styles.subcategorySelector}>
          {Object.entries(currentMenu.subcategories).map(
            ([key, subcategory]) => (
              <label key={key} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="subcategory"
                  value={key}
                  checked={selectedSubcategory === key}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>{subcategory.title}</span>
              </label>
            )
          )}
        </div>
      )}

      {currentMenu.subcategories ? (
        <div className={styles.menuItems}>
          {renderMenuItems(
            currentMenu.subcategories[selectedSubcategory].items
          )}
        </div>
      ) : (
        <div className={styles.menuItems}>
          {renderMenuItems(currentMenu.items)}
        </div>
      )}
    </div>
  );
};

export default Menu;
