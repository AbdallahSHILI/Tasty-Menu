import React from "react";
import styles from "./mainFood.module.css";
import { useMenu } from "../../../../context/MenuContext";
import Crepe from "../../../../Components/Assets/Crepe.svg";
import Gaufre from "../../../../Components/Assets/Gauffre.svg";
import Bubble from "../../../../Components/Assets/bubble.svg";
import Waffle from "../../../../Components/Assets/Waffle.svg";
import Boissons from "../../../../Components/Assets/Boissons.svg";
import IceCream from "../../../../Components/Assets/Ice_Cream.svg";
import Malfouf from "../../../../Components/Assets/Malfouf.svg";
import Jwajem from "../../../../Components/Assets/Jwajem.svg";

const MainFood = () => {
  const { selectedCategory, setSelectedCategory } = useMenu();

  const menuItems = [
    {
      id: 1,
      name: "Crêpe",
      icon: Crepe,
    },
    {
      id: 2,
      name: "Gaufre",
      icon: Gaufre,
    },
    {
      id: 3,
      name: "Bubble Tea",
      icon: Bubble,
    },
    {
      id: 4,
      name: "Gaufre Liégeoise",
      icon: Waffle,
    },
    {
      id: 5,
      name: "Boissons",
      icon: Boissons,
    },
    {
      id: 6,
      name: "Glace Roulée",
      icon: IceCream,
    },
    {
      id: 7,
      name: "Malfouf",
      icon: Malfouf,
    },
    {
      id: 8,
      name: "Jwajem",
      icon: Jwajem,
    },
  ];

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
