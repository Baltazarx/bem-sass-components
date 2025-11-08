import React from "react";
import styles from "./Header.module.scss";

export default function HeaderLogo() {
  return (
    <header className={`${styles.header} ${styles["header--logo"]}`}>
      <div className={styles.header__logo}>
        <img
          src="https://i.pinimg.com/564x/ed/8a/1a/ed8a1a9f15d77c06d91355e41d95ff6e.jpg"
          alt="Logo"
        />
        <h1 className={styles.header__title}>Header Logo</h1>
      </div>
      <span>🌸 Lokabyte</span>
    </header>
  );
}

