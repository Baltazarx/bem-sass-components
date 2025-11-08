import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Button.module.scss";

export default function ButtonBasic({ label = "Submit", onClick }) {
  return (
    <button className={styles["btn--basic"]} onClick={onClick}>
      <FaCheck className={styles["btn--basic__icon"]} />
      <span>{label}</span>
    </button>
  );
}
