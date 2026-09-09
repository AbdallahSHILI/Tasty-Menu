import React, { useState, useEffect, useRef } from "react";
import style from "./foodPic.module.css";
import Close from "../Assets/Close.svg";

const SWIPE_THRESHOLD = 50;

const FoodPic = ({ images, title, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(null);
  const hasMoved = useRef(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setDragOffset(0);
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
    hasMoved.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    hasMoved.current = true;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = (e) => {
    setIsDragging(false);

    if (!hasMoved.current) {
      onClose(); // pure tap, no drag at all
      touchStartX.current = null;
      setDragOffset(0);
      return;
    }

    if (Math.abs(dragOffset) > SWIPE_THRESHOLD) {
      dragOffset > 0 ? goToPrev() : goToNext();
    }

    // snap back to center either way — new image (if changed) settles in from 0
    setDragOffset(0);
    touchStartX.current = null;
  };

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div
        className={style.modalContent}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? "none" : "transform 0.25s ease",
          }}
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
