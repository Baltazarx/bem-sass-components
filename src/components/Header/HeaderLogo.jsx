import React from "react";
import { FaRocket } from "react-icons/fa";
import styles from "./Header.module.scss";

export default function HeaderLogo() {
  return (
    <header className={`${styles.header} ${styles["header--logo"]}`}>
      <div className={styles.header__logo}>
        <div className={styles.header__logoImage}>
          <img
            src="https://i.pinimg.com/736x/12/01/d8/1201d8e5f751881466574e87a7b55f93.jpg"
            alt="Logo"
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect fill='%23c49a6c' width='48' height='48' rx='24'/%3E%3Ctext x='24' y='30' font-family='Arial' font-size='24' font-weight='bold' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3EL%3C/text%3E%3C/svg%3E`;
            }}
          />
        </div>
        <div className={styles.header__logoText}>
          <h1 className={styles.header__title}>Header Logo</h1>
          <span className={styles.header__subtitle}>Design System</span>
        </div>
      </div>
      <div className={styles.header__action}>
        <FaRocket className={styles.header__actionIcon} />
        <span>Hello World</span>
      </div>
    </header>
  );
}
