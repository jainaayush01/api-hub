import React from "react";
import styles from "./ApiCard.module.scss";
import Avatar from "../../assets/apiAvatar.png";

const ApiCard = ({ apiName, apiEndpoint, apiDescription }) => {
  return (
    <div className={styles.apiCard}>
      <img src={Avatar} className={styles.apiAvatar} alt="logo" />
      <a
        className={styles.link}
        target="_blank"
        href={apiEndpoint}
        rel="noreferrer"
      >
        <div className={styles.primaryText}>{apiName}</div>
      </a>
      <div className={styles.secondaryText}>{apiDescription}</div>
    </div>
  );
};

export default ApiCard;
