import React from "react";
import styles from "./Button.module.scss";
import { FaSearch } from "react-icons/fa";

export default function ButtonIcon({ label = "Search", onClick }) {
  return (
    <button className={styles["btn--icon"]} onClick={onClick}>
      <FaSearch className={styles["btn--icon__icon"]} />
      <span className={styles["btn--icon__text"]}>{label}</span>
    </button>
  );
}
