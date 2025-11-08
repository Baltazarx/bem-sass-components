import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Card.module.scss";

export default function CardAction() {
  return (
    <div className={`${styles.card__container} ${styles["card--action"]}`}>
      <img
        src="https://i.pinimg.com/1200x/3b/6f/23/3b6f236d7322731a15e407c534ebd82a.jpg"
        alt="Card Action"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>Card with Action</h3>
        <p className={styles.card__desc}>
          Card dengan tombol action yang elegan untuk interaksi pengguna yang lebih baik.
        </p>
        <button className={styles.card__actionBtn}>
          Learn More
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
