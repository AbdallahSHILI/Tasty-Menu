import React from "react";
import style from "./supplement.module.css";

const Supplement = ({ subcategory }) => {
  if (!subcategory) {
    return null; // No subcategory selected, display nothing
  }

  const supplements =
    subcategory === "sweet" || subcategory === "SweetOnly"
      ? "Supplement Nutella = 3dt, Supplement Chocolat aux choix = 3dt"
      : subcategory === "savory" || subcategory === "SavoryOnly"
        ? "Supplement Thon ou Salami ou Jambon = 1dt, Supplement Œuf = 1dt, SupplementFromage Arbi = 2dt"
        : null;

  if (!supplements) {
    return null; // Subcategory does not match "sweet" or "savory", display nothing
  }

  return (
    <div className={style.supplementContainer}>
      <p className={style.supplementDetails}>{supplements}</p>
    </div>
  );
};

export default Supplement;
