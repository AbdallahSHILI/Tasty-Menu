import React from "react";
import styles from "./mainFood.module.css";
import { useMenu } from "../../../../context/MenuContext";
import { menuData } from "../../../../data/menuData";

const MainFood = () => {
  const { selectedCategory, setSelectedCategory } = useMenu();

  const menuItems = Object.entries(menuData).map(([id, category]) => ({
    id: parseInt(id),
    name: category.category,
    icon: category.icon,
  }));

  return (
    <div className={styles.categories}>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.categoryItem} ${
            selectedCategory === item.id ? styles.selected : ""
          }`}
          onClick={() => setSelectedCategory(item.id)}
        >
          <div className={styles.iconWrapper}>
            <img
              src={item.icon}
              alt={item.name}
              className={styles.categoryIcon}
            />
          </div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MainFood;
