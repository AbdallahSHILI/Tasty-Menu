import React from "react";
import style from "./supplement.module.css";
import { menuData } from "../../../data/menuData";

const Supplement = ({ subcategory, categoryId }) => {
  const categoryData = menuData[categoryId];
  if (!categoryData || !categoryData.subcategories[subcategory]) {
    return <p>Invalid category or subcategory</p>;
  }

  const subcategoryData = categoryData.subcategories[subcategory];

  const supplements =
    subcategory === "sweet"
      ? "Supplement Nutella = 2dt, Supplement Chocolat aux choix = 3dt"
      : "Supplement Thon ou Salami ou Jambon ou Œuf = 1dt, Fromage Arbi = 2dt";

  return (
    <div className={style.supplementContainer}>
      <p className={style.supplementDetails}>{supplements}</p>
    </div>
  );
};

export default Supplement;
