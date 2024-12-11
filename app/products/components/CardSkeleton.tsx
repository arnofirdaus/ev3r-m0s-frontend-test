import React from "react";
import styles from "./CardSkeleton.module.scss";

const CardSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.skeleton} ${styles.image}`} />
      <div className={`${styles.skeleton} ${styles.title}`} />
      <div className={`${styles.skeleton} ${styles.price}`} />
      <div className={`${styles.skeleton} ${styles.button}`} />
    </div>
  );
};

export default CardSkeleton;
