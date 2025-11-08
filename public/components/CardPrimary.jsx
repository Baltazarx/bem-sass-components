import React from "react";
import styles from "./Card.module.scss";

export default function CardPrimary() {
  return (
    <div className={`${styles.card__container} ${styles["card--primary"]}`}>
      <img
        src="https://i.pinimg.com/564x/4b/a9/4e/4ba94e64ff3cf6713c2688a0111b56a7.jpg"
        alt="Pink aesthetic"
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

