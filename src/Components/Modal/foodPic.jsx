import React, { useState, useEffect, useRef } from "react";
import style from "./foodPic.module.css";
import Close from "../Assets/Close.svg";

const SWIPE_THRESHOLD = 50;

const FoodPic = ({ images, title, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const [pendingStep, setPendingStep] = useState(0); // -1 = prev, 1 = next, 0 = cancel
  const touchStartX = useRef(null);
  const hasMoved = useRef(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setDragOffset(0);
      setIsSnapping(false);
    }
  }, [isOpen, images]);

  if (!isOpen) return null;

  const getPrevIndex = (idx) => (idx === 0 ? images.length - 1 : idx - 1);
  const getNextIndex = (idx) => (idx === images.length - 1 ? 0 : idx + 1);

  const handleTouchStart = (e) => {
    if (images.length < 2) return;
    touchStartX.current = e.touches[0].clientX;
    hasMoved.current = false;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    hasMoved.current = true;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!hasMoved.current) {
      onClose(); // pure tap, unchanged behavior
      touchStartX.current = null;
      return;
    }

    if (dragOffset > SWIPE_THRESHOLD) {
      setPendingStep(-1); // finish revealing prev
    } else if (dragOffset < -SWIPE_THRESHOLD) {
      setPendingStep(1); // finish revealing next
    } else {
      setPendingStep(0); // snap back, nothing changes
    }
    setIsSnapping(true);
    touchStartX.current = null;
  };

  const handleTransitionEnd = () => {
    if (!isSnapping) return;

    if (pendingStep === 1) setCurrentIndex((idx) => getNextIndex(idx));
    else if (pendingStep === -1) setCurrentIndex((idx) => getPrevIndex(idx));

    setIsSnapping(false);
    setDragOffset(0);
  };

  let translate;
  if (isSnapping) {
    translate =
      pendingStep === 1 ? "-200%" : pendingStep === -1 ? "0%" : "-100%";
  } else {
    translate = `calc(-100% + ${dragOffset}px)`;
  }

  const trackStyle = {
    transform: `translateX(${translate})`,
    transition: isSnapping ? "transform 0.28s ease" : "none",
  };

  const slides = [
    images[getPrevIndex(currentIndex)],
    images[currentIndex],
    images[getNextIndex(currentIndex)],
  ];

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
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

        <div
          className={style.imageViewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={style.imageTrack}
            style={trackStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((src, i) => (
              <div className={style.imageSlide} key={i}>
                <img
                  src={src}
                  alt={`Food ${i}`}
                  className={style.image}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

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
