import React, { useState } from "react";
import styles from "./sideBar.module.css";
import { menuData } from "../../data/menuData";

const SideBar = ({ isOpen }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      {Object.entries(menuData).map(([id, category]) => (
        <div key={id} className={styles.categoryItem}>
          <div
            className={styles.categoryName}
            onClick={() => toggleCategory(id)}
          >
            {category.category}
            {category.subcategories && (
              <span
                className={`${styles.arrow} ${
                  expandedCategory === id ? styles.expanded : ""
                }`}
              >
                ▼
              </span>
            )}
          </div>
          {category.subcategories && expandedCategory === id && (
            <div className={styles.subcategoriesList}>
              {Object.entries(category.subcategories).map(
                ([key, subcategory]) => (
                  <div key={key} className={styles.subcategoryItem}>
                    {subcategory.title}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
