import React from "react";
import styles from "./Card.module.scss";

export default function CardOutline() {
  return (
    <div className={`${styles.card__container} ${styles["card--outline"]}`}>
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=180&fit=crop"
        alt="Card Outline"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>Card Outline</h3>
        <p className={styles.card__desc}>
          Card dengan garis tepi biru minimalis untuk tampilan bersih dan profesional.
        </p>
      </div>
    </div>
  );
}
