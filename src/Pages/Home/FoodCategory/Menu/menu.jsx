import React from "react";
import styles from "./menu.module.css";
import { useMenu } from "../../../../context/MenuContext";
import { menuData } from "../../../../data/menuData";

const Menu = () => {
  const { selectedCategory } = useMenu();
  const currentMenu = menuData[selectedCategory];

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
      <h2 className={styles.categoryTitle}>{currentMenu.category}</h2>
      
      {currentMenu.subcategories ? (
        // For menus with subcategories (Crêpes, Gaufres, etc.)
        Object.entries(currentMenu.subcategories).map(([key, subcategory]) => (
          <div key={key} className={styles.subcategory}>
            <h3 className={styles.subcategoryTitle}>{subcategory.title}</h3>
            <div className={styles.menuItems}>
              {renderMenuItems(subcategory.items)}
            </div>
          </div>
        ))
      ) : (
        // For menus without subcategories (Bubbles, Malfouf, etc.)
        <div className={styles.menuItems}>
          {renderMenuItems(currentMenu.items)}
        </div>
      )}
    </div>
  );
};

export default Menu;
