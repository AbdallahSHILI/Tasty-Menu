import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  // Changed to capital N for component naming convention
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Tasty</div>
      <div className={styles.searchIcon}>Icon</div>
    </nav>
  );
};

export default Navbar;
