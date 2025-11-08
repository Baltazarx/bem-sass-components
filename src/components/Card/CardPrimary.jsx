import React from "react";
import styles from "./Card.module.scss";

export default function CardPrimary() {
  return (
    <div className={`${styles.card__container} ${styles["card--primary"]}`}>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=180&fit=crop"
        alt="Card Primary"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>Card Primary</h3>
        <p className={styles.card__desc}>
          Tampilan card utama dengan warna lembut dan sentuhan pink pastel yang manis.
        </p>
      </div>
    </div>
  );
}
