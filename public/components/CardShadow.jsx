import React from "react";
import styles from "./Card.module.scss";

export default function CardShadow() {
  return (
    <div className={`${styles.card__container} ${styles["card--shadow"]}`}>
      <img
        src="https://i.pinimg.com/564x/59/a1/09/59a109b0b9ec0907e02e0e3b9c20889e.jpg"
        alt="Neutral modern"
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

