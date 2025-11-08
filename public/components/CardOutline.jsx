import React from "react";
import styles from "./Card.module.scss";

export default function CardOutline() {
  return (
    <div className={`${styles.card__container} ${styles["card--outline"]}`}>
      <img
        src="https://i.pinimg.com/564x/09/6a/51/096a51d935b631efdc0a30b29eeb4236.jpg"
        alt="Blue minimalist"
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

