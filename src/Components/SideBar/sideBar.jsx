import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./sideBar.module.css";
import { menuData } from "../../data/menuData";
import HomeIcon from "../../Components/Assets/HomeIcon.svg";
import SideBarFooter from "./SideBarFooter/sideBarFooter";

const categoryRoutes = {
  1: "/Crepe",
  2: "/Gaufre",
  3: "/Bubbles",
  4: "/Waffle",
  5: "/Malfouf",
  6: "/Ice-Cream",
  7: "/Jus",
  8: "/Jwajem",
  9: "/Café",
};

const SideBar = ({ isOpen, onClose }) => {
  // Handle clicks outside the sidebar
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
    >
      <Link
        to="/"
        className={`${styles.categoryItem} ${styles.homeItem}`}
        onClick={onClose}
      >
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
          onClick={onClose}
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
      <br />
      <SideBarFooter />
    </div>
  );
};

export default SideBar;
