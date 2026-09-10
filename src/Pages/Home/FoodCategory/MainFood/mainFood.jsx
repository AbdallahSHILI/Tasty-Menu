import React, { useState, useRef } from "react";
import styles from "./mainFood.module.css";
import { Lottie } from "lottie-react";
import chefAnimation from "../../../../Components/Assets/animations/chef.json"; // adjust path
import { useMenu } from "../../../../context/MenuContext";
import { menuData } from "../../../../data/menuData";

const ANIMATION_DURATION = 4000; // ms — matches the json's 100 frames @ 25fps

const MainFood = () => {
  const { selectedCategory, setSelectedCategory } = useMenu();
  const [animatingId, setAnimatingId] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = Object.entries(menuData).map(([id, category]) => ({
    id: parseInt(id),
    name: category.category,
    icon: category.icon,
  }));

  const handleSelect = (id) => {
    setSelectedCategory(id);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnimatingId(id);
    timeoutRef.current = setTimeout(
      () => setAnimatingId(null),
      ANIMATION_DURATION,
    );
  };

  return (
    <div className={styles.categories}>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.categoryItem} ${
            selectedCategory === item.id ? styles.selected : ""
          }`}
          onClick={() => handleSelect(item.id)}
        >
          {animatingId === item.id && (
            <div className={styles.lottieOverlay}>
              <Lottie src={chefAnimation} autoplay loop={false} />
            </div>
          )}

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
