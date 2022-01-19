import React from "react";
import styles from "./Banner.module.scss";
import bannerImage from "../../assets/bannerImage.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img
        src={bannerImage}
        className={styles.bannerImage}
        alt="banner image"
      />
      <div className={styles.semiCircle}></div>
      <div className={styles.textBox}>
        <div className={styles.primaryText}>BACKGROUND IMAGE REMOVE</div>
        <div className={styles.secondaryText}>100% automatic and free</div>
      </div>
      <button className={styles.viewButton}>View App</button>
    </div>
  );
};

export default Banner;
