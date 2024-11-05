import React from "react";
import styles from "./home.module.css";
import { HomeHeader, FoodCategory, Menu } from "../index";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeHeader />
      <FoodCategory />
      <Menu />
    </div>
  );
};

export default Home;
