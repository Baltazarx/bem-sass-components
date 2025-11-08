import React from "react";
import styles from "./Button.module.scss";

export default function ButtonBasic({ label = "Click Me", onClick }) {
  return (
    <button className={styles["btn--basic"]} onClick={onClick}>
      {label}
    </button>
  );
}

