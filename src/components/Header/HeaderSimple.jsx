import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Header.module.scss";

export default function HeaderSimple() {
  return (
    <header className={`${styles.header} ${styles["header--simple"]}`}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>Header Simple</h1>
        <div className={styles.header__badge}>
          <FaStar className={styles.header__badgeIcon} />
          <span>Welcome!</span>
        </div>
      </div>
    </header>
  );
}
