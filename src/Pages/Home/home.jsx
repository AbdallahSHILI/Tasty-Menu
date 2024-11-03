import React from "react";
import styles from "./home.module.css";
import { HomeHeader, FoodCategory } from "../index";
const Home = () => {
  return (
    <div>
      <HomeHeader />
      <FoodCategory />
    </div>
  );
};

export default Home;
