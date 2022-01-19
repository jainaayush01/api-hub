import React from "react";
import styles from "./ApiCard.module.scss";
import Image from "../../assets/apiImage.png";

const ApiCard = () => {
  return (
    <div className={styles.apiCard}>
      <img src={Image} className={styles.apiImage} alt="logo" />
      <div className={styles.primaryText}> Background Remove </div>
      <div className={styles.secondaryText}>
        The descriptipn of the API in quick brief and we will truncate it here...
      </div>
    </div>
  );
};

export default ApiCard;
