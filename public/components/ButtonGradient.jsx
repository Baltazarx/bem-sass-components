import React from "react";
import styles from "./Button.module.scss";

export default function ButtonGradient({ label = "Order Now", onClick }) {
  return (
    <button className={styles["btn--gradient"]} onClick={onClick}>
      {label}
    </button>
  );
}

