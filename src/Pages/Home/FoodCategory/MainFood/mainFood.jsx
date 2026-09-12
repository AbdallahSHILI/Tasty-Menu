import React, { useState, useEffect } from "react";
import styles from "./mainFood.module.css";
import { Lottie } from "lottie-react";
import chefAnimation from "../../../../Components/Assets/animations/chef.json";
import { useMenu } from "../../../../context/MenuContext";
import { menuData } from "../../../../data/menuData";

const MainFood = () => {
  const { selectedCategory, setSelectedCategory } = useMenu();
  const [animatingId, setAnimatingId] = useState(null);

  const menuItems = Object.entries(menuData).map(([id, category]) => ({
    id: parseInt(id),
    name: category.category,
    icon: category.icon,
  }));

  // Play the animation once on mount, for whichever category is selected by default
  useEffect(() => {
    if (selectedCategory !== null && selectedCategory !== undefined) {
      setAnimatingId(selectedCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (id) => {
    setSelectedCategory(id);
    setAnimatingId(id);
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
