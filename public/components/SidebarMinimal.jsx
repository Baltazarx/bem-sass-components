import React from "react";
import styles from "./Sidebar.module.scss";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

export default function SidebarMinimal() {
  return (
    <aside className={`${styles.sidebar} ${styles["sidebar--minimal"]}`}>
      <FaHome className={styles.sidebar__icon} />
      <FaUser className={styles.sidebar__icon} />
      <FaCog className={styles.sidebar__icon} />
    </aside>
  );
}

