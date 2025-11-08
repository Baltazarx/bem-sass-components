import React from "react";
import styles from "./Header.module.scss";

export default function HeaderNav() {
  return (
    <header className={`${styles.header} ${styles["header--nav"]}`}>
      <h1 className={styles.header__title}>Header Navigation</h1>
      <nav className={styles.header__nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

