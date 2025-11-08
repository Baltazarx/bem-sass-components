import React from "react";
import styles from "./Button.module.scss";
import { FaHeart } from "react-icons/fa";

export default function ButtonIcon({ label = "Love", onClick }) {
  return (
    <button className={styles["btn--icon"]} onClick={onClick}>
      <FaHeart className={styles["btn--icon__icon"]} />
      <span className={styles["btn--icon__text"]}>{label}</span>
    </button>
  );
}

