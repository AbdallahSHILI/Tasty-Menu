import React from "react";
import style from "./supplement.module.css";
import { menuData } from "../../../data/menuData";

const Supplement = ({ subcategory }) => {
  if (!subcategory) {
    return null; // No subcategory selected, display nothing
  }

  const supplements =
    subcategory === "sweet" || subcategory === "SweetOnly"
      ? "Supplement Nutella = 2dt, Supplement Chocolat aux choix = 3dt"
      : subcategory === "savory" || subcategory === "SavoryOnly"
      ? "Supplement Thon ou Salami ou Jambon ou Œuf = 1dt, Fromage Arbi = 2dt"
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
