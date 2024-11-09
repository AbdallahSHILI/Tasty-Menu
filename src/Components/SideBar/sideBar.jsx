import React from "react";
import { Link } from "react-router-dom";
import styles from "./sideBar.module.css";
import { menuData } from "../../data/menuData";
import HomeIcon from "../../Components/Assets/HomeIcon.svg";

const categoryRoutes = {
  1: "/crepe",
  2: "/gaufre",
  3: "/bubble",
  4: "/waffle",
  5: "/boissons",
  6: "/ice-cream",
  7: "/malfouf",
  8: "/cafe",
};

const SideBar = ({ isOpen }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <Link to="/" className={`${styles.categoryItem} ${styles.homeItem}`}>
        <div className={styles.homeName}>
          <img src={HomeIcon} alt="Home" className={styles.homeIcon} />
          <span className={styles.categoryText}>Accueil</span>
        </div>
      </Link>
      {Object.entries(menuData).map(([id, category]) => (
        <Link
          key={id}
          to={categoryRoutes[id] || "/"}
          className={styles.categoryItem}
        >
          <div className={styles.categoryName}>
            <img
              src={category.icon}
              alt={category.category}
              className={styles.categoryIcon}
            />
            <span className={styles.categoryText}>{category.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
