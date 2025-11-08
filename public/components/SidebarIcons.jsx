import React from "react";
import styles from "./Sidebar.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SidebarIcons() {
  return (
    <aside className={`${styles.sidebar} ${styles["sidebar--icons"]}`}>
      <FaFacebook className={styles.sidebar__icon} />
      <FaTwitter className={styles.sidebar__icon} />
      <FaInstagram className={styles.sidebar__icon} />
    </aside>
  );
}
