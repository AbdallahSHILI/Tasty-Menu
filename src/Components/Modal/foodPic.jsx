import React, { useState, useEffect } from "react";
import style from "./foodPic.module.css";
import flech from "../Assets/Flech-Right.svg";
import Close from "../Assets/Close.svg";

const FoodPic = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset currentIndex whenever modal is opened or images change
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, images]);

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
        {/* Close icon button */}
        <div
          className={style.closeButtonWrapper}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <img src={Close} alt="Close" className={style.closeButton} />
        </div>

        <div className={style.navigationButtons} onClick={onClose}>
          <img
            src={flech}
            alt="Previous"
            className={`${style.arrowButton} ${style.leftArrow}`}
            onClick={(e) => {
              e.stopPropagation();
              handlePrevClick(e);
            }}
          />
          <img
            src={images[currentIndex]}
            alt={`Food ${currentIndex + 1}`}
            className={style.image}
            onClick={onClose} // Close modal on image click
          />
          <img
            src={flech}
            alt="Next"
            className={`${style.arrowButton} ${style.rightArrow}`}
            onClick={(e) => {
              e.stopPropagation();
              handleNextClick(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodPic;
