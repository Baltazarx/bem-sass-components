import React from "react";
import styles from "./Sidebar.module.scss";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

export default function SidebarFull() {
  return (
    <aside className={`${styles.sidebar} ${styles["sidebar--full"]}`}>
      <div className={styles.sidebar__item}>
        <FaHome className={styles.sidebar__icon} />
        <span className={styles.sidebar__label}>Home</span>
      </div>
      <div className={styles.sidebar__item}>
        <FaInfoCircle className={styles.sidebar__icon} />
        <span className={styles.sidebar__label}>About</span>
      </div>
      <div className={styles.sidebar__item}>
        <FaEnvelope className={styles.sidebar__icon} />
        <span className={styles.sidebar__label}>Contact</span>
      </div>
    </aside>
  );
}

