import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.scss";
import bannerImage from "../../assets/bannerImage.png";

const Banner = () => {
  const navigate = useNavigate();
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
      <button className={styles.viewButton} onClick={() => navigate('/bgremover')}>View App</button>
    </div>
  );
};

export default Banner;
