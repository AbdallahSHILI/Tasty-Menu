import React from "react";
import style from "./foodPic.module.css";

const FoodPic = ({ images, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeButton} onClick={onClose}>
          X
        </button>
        <div className={style.imageGallery}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Food ${index + 1}`}
              className={style.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodPic;
