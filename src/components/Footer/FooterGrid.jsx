import React from "react";
import styles from "./Footer.module.scss";

export default function FooterGrid() {
  return (
    <footer className={`${styles.footer} ${styles["footer--grid"]}`}>
      <div className={styles.footer__section}>
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
      </div>
      <div className={styles.footer__section}>
        <h4>Support</h4>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>
        <a href="#">Help Center</a>
      </div>
      <div className={styles.footer__section}>
        <h4>Legal</h4>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Cookies</a>
      </div>
    </footer>
  );
}
