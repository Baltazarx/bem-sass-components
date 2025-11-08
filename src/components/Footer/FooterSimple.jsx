import React from "react";
import styles from "./Footer.module.scss";

export default function FooterSimple() {
  return (
    <footer className={`${styles.footer} ${styles["footer--simple"]}`}>
      <p className={styles.footer__text}>
        © 2025 Lokabyte. All Rights Reserved.
      </p>
    </footer>
  );
}
