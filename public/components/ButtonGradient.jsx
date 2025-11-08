import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Button.module.scss";

export default function ButtonGradient({ label = "Explore", onClick }) {
  return (
    <button className={styles["btn--gradient"]} onClick={onClick}>
      <span>{label}</span>
      <FaArrowRight className={styles["btn--gradient__icon"]} />
    </button>
  );
}
