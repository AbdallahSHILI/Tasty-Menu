import React from "react";
import styles from "./NavigationArrows.module.css";

const NavigationArrows = ({ currentPage, onPageChange, totalPages }) => {
  const handlePrevious = () => {
    const newPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
    onPageChange(newPage);
  };

  const handleNext = () => {
    const newPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
    onPageChange(newPage);
  };

  return (
    <div className={styles.navigationContainer}>
      <button
        className={styles.arrowButton}
        onClick={handlePrevious}
        aria-label="Previous page"
      >
        <div className={styles.arrow}>‹</div>
      </button>

      <div className={styles.pageIndicators}>
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              index === currentPage ? styles.active : ""
            }`}
            onClick={() => onPageChange(index)}
          />
        ))}
      </div>

      <button
        className={styles.arrowButton}
        onClick={handleNext}
        aria-label="Next page"
      >
        <div className={styles.arrow}>›</div>
      </button>
    </div>
  );
};

export default NavigationArrows;
