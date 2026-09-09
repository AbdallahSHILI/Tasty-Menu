import React, { useState, useEffect, useRef } from "react";
import style from "./foodPic.module.css";
import Close from "../Assets/Close.svg";

const SWIPE_THRESHOLD = 50;

const FoodPic = ({ images, title, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, images]);

  if (!isOpen) return null;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      deltaX > 0 ? goToPrev() : goToNext();
    } else {
      onClose(); // small movement = tap, close like before
    }

    touchStartX.current = null;
  };

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div
        className={style.modalContent}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={style.closeButtonWrapper}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <img src={Close} alt="Close" className={style.closeButton} />
        </div>

        {title && <h2 className={style.title}>{title}</h2>}
        <img
          src={images[currentIndex]}
          alt={`Food ${currentIndex + 1}`}
          className={style.image}
          draggable={false}
        />

        {images.length > 1 && (
          <div className={style.dots}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${style.dot} ${
                  index === currentIndex ? style.dotActive : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodPic;
