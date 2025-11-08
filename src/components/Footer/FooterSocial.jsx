import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterSocial() {
  return (
    <footer className={`${styles.footer} ${styles["footer--social"]}`}>
      <FaFacebook className={styles.footer__icon} />
      <FaInstagram className={styles.footer__icon} />
      <FaTwitter className={styles.footer__icon} />
    </footer>
  );
}
