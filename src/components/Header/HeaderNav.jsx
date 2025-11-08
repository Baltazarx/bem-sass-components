import React from "react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import styles from "./Header.module.scss";

export default function HeaderNav() {
  return (
    <header className={`${styles.header} ${styles["header--nav"]}`}>
      <div className={styles.header__brand}>
        <h1 className={styles.header__title}>Header Navigation</h1>
      </div>
      <nav className={styles.header__nav}>
        <a href="#" className={styles.header__navItem}>
          <FaHome className={styles.header__navIcon} />
          <span>Home</span>
        </a>
        <a href="#" className={styles.header__navItem}>
          <FaInfoCircle className={styles.header__navIcon} />
          <span>About</span>
        </a>
        <a href="#" className={styles.header__navItem}>
          <FaEnvelope className={styles.header__navIcon} />
          <span>Contact</span>
        </a>
      </nav>
    </header>
  );
}
