import React from "react";
import styles from "./Header.module.scss";

export default function HeaderSimple() {
  return (
    <header className={`${styles.header} ${styles["header--simple"]}`}>
      <h1 className={styles.header__title}>Header Simple</h1>
      <span>✨ Welcome!</span>
    </header>
  );
}

