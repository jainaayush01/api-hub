import React from "react";
import styles from "./ApiCard.module.scss";
import Avatar from "../../assets/apiAvatar.png";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const ApiCard = ({ apiName, apiEndpoint, apiDescription, apiId, edit }) => {
  const navigate = useNavigate();

  const handleEditModal = () => {
    navigate("/api/edit", {
      state: {
        apiName,
        apiDescription,
        apiEndpoint,
        apiId: apiId,
      },
    });
  };

  return (
    <div className={styles.apiCard}>
      <img src={Avatar} className={styles.apiAvatar} alt="logo" />
      <div className={styles.apiTitle}>
        <a
          className={styles.link}
          target="_blank"
          href={apiEndpoint}
          rel="noreferrer"
        >
          <div className={styles.primaryText}>{apiName}</div>
        </a>
        {edit ? (
          <div className={styles.editBtn} onClick={handleEditModal}>
            <Icon name="edit outline" size="large" />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.secondaryText}>{apiDescription}</div>
    </div>
  );
};

export default ApiCard;
