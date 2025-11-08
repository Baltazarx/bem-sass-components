import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Card.module.scss";

export default function CardBadge() {
  return (
    <div className={`${styles.card__container} ${styles["card--badge"]}`}>
      <div className={styles.card__badge}>
        <FaStar />
        <span>Featured</span>
      </div>
      <img
        src="https://i.pinimg.com/736x/f4/2f/ff/f42ffff6cd3d7fa6ad0dbd430b16bb3e.jpg"
        alt="Card Badge"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>Card with Badge</h3>
        <p className={styles.card__desc}>
          Card dengan badge featured yang menarik di bagian atas untuk menonjolkan konten spesial.
        </p>
      </div>
    </div>
  );
}

