import React from "react";
import styles from "./Card.module.scss";

export default function CardGradient() {
  return (
    <div className={`${styles.card__container} ${styles["card--gradient"]}`}>
      <img
        src="https://i.pinimg.com/736x/2b/43/28/2b432840a61c8576e5a00b1b1cd40f56.jpg"
        alt="Card Gradient"
        className={styles.card__image}
      />
      <div className={styles.card__overlay}>
        <h3 className={styles.card__title}>Card with Gradient</h3>
        <p className={styles.card__desc}>
          Card dengan gradient overlay yang indah untuk memberikan efek visual yang menarik.
        </p>
      </div>
    </div>
  );
}

