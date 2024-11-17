import React, { useState } from "react";
import style from "./foodPic.module.css";
import flech from "../Assets/Flech-Right.svg";
import Close from "../Assets/Close.svg";

const FoodPic = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevClick = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Wrap the close icon in a button */}
        <button className={style.closeButtonWrapper} onClick={onClose}>
          <img src={Close} alt="Close" className={style.closeButton} />
        </button>

        <div className={style.navigationButtons}>
          <img
            src={flech}
            alt="Previous"
            className={`${style.arrowButton} ${style.leftArrow}`}
            onClick={handlePrevClick}
          />
          <img
            src={images[currentIndex]}
            alt={`Food ${currentIndex + 1}`}
            className={style.image}
          />
          <img
            src={flech}
            alt="Next"
            className={`${style.arrowButton} ${style.rightArrow}`}
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodPic;
