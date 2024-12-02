import React, { useState } from "react";
import styles from "./categoryPage.module.css";
import { useMenu } from "../../context/MenuContext";
import { menuData } from "../../data/menuData";
import { useNavigate } from "react-router-dom";
import GalerieIcon from "../../Components/Assets/Galerie.svg";
import ReturnIcon from "../../Components/Assets/Return.svg";
import FoodPic from "../../Components/Modal/foodPic"; // Import the FoodPic component
import { Supplement } from "../index";

const CategoryPage = ({ category }) => {
  const currentMenu = menuData[category];
  const navigate = useNavigate();

  // Add state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultSubcategory = currentMenu?.subcategories
    ? Object.keys(currentMenu.subcategories)[0]
    : null;
  const [activeSubcategory, setActiveSubcategory] =
    useState(defaultSubcategory);
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] =
    useState(defaultSubcategory);
  const [categoryId] = useState(category);

  if (!currentMenu) return null;

  const subcategoryKeys = currentMenu.subcategories
    ? Object.keys(currentMenu.subcategories)
    : [];
  const hasSubcategories = subcategoryKeys.length > 0;

  const currentItems = hasSubcategories
    ? currentMenu.subcategories[activeSubcategory]?.items
    : currentMenu.items;

  const handleReturn = () => {
    navigate(-1);
  };

  // Add handler for gallery icon click
  const handleGalleryClick = () => {
    setIsModalOpen(true);
  };

  const handleSubcategoryChange = (subcategory) => {
    setActiveSubcategory(subcategory);
    setSelectedSubcategory(subcategory);
    setActiveFilter(null);
  };

  const shouldShowSupplement = () => {
    if (!categoryId) return false;

    const currentMenu = menuData[categoryId];

    // Check for subcategories (sweet/savory toggle)
    if (currentMenu?.subcategories && selectedSubcategory) {
      return ["sweet", "savory"].includes(selectedSubcategory);
    }

    // Check for subcat property (SweetOnly/SavoryOnly)
    if (currentMenu?.subcat) {
      return ["SweetOnly", "SavoryOnly"].includes(currentMenu.subcat);
    }

    return false;
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <div
          className={styles.headerImage}
          style={{
            backgroundImage: `url(${currentMenu.headerImage})`,
          }}
        ></div>
        <div className={styles.navigationHeader}>
          <img
            src={ReturnIcon}
            alt="Return"
            className={styles.returnIcon}
            onClick={handleReturn}
          />
          <h1 className={styles.categoryTitle}>{currentMenu.category}</h1>
          <img
            src={GalerieIcon}
            alt="Galerie"
            className={styles.galerieIcon}
            onClick={handleGalleryClick} // Add click handler
          />
        </div>
      </div>

      {hasSubcategories && subcategoryKeys.length > 1 && (
        <div className={styles.toggleWrapper}>
          {subcategoryKeys.map((key) => (
            <button
              key={key}
              className={`${styles.toggleButton} ${
                activeSubcategory === key ? styles.active : ""
              }`}
              onClick={() => handleSubcategoryChange(key)}
            >
              {currentMenu.subcategories[key].title}
            </button>
          ))}
        </div>
      )}
      <div className={styles.menuSection}>
        <div className={styles.itemsGrid}>
          {currentItems?.map((item) => (
            <div key={item.id} className={styles.menuItem}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.price}>{item.price} DT</p>
              {item.ingredients && (
                <p className={styles.ingredients}>{item.ingredients}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {shouldShowSupplement() && (
        <Supplement
          subcategory={
            selectedSubcategory ||
            (menuData[categoryId]?.subcat === "SweetOnly" ? "sweet" : "savory")
          }
        />
      )}

      <FoodPic
        images={currentMenu.ModalImages}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CategoryPage;
