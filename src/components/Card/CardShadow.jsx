import React from "react";
import styles from "./Card.module.scss";

export default function CardShadow() {
  return (
    <div className={`${styles.card__container} ${styles["card--shadow"]}`}>
      <img
        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=180&fit=crop"
        alt="Card Shadow"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>Card Shadow</h3>
        <p className={styles.card__desc}>
          Card dengan efek bayangan lembut, cocok untuk menonjolkan konten modern.
        </p>
      </div>
    </div>
  );
}
