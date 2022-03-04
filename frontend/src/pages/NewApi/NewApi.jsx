import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./NewApi.module.scss";
import { fetchData } from "../../utils/fetchData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const NewApi = ({ toast }) => {
  const navigate = useNavigate();
  const [apiName, setApiName] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiDescription, setApiDescription] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      try {
        let res = await fetchData(
          "POST",
          `${BACKEND_URL}/api/apis/new`,
          {
            name: apiName,
            endpoint: apiEndpoint,
            description: apiDescription,
          },
          authToken,
        );
        if (res.success) {
          navigate("/myapis");
          toast.success(res.message);
        }
        return;
      } catch (err) {
        toast.error("Internal Server Error");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.newApi}>
      <div className={styles.apiContainer}>
        <div className={styles.h1}>Add New API</div>
        <input
          className={styles.inputField}
          type="text"
          placeholder="API Name"
          value={apiName}
          onChange={(e) => setApiName(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="API End Point"
          value={apiEndpoint}
          onChange={(e) => setApiEndpoint(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          style={{ height: "100px" }}
          placeholder="API Description"
          value={apiDescription}
          onChange={(e) => setApiDescription(e.target.value)}
        />
        <div className={styles.submitBtn} onClick={handleOnSubmit}>
          Add API
        </div>
      </div>
    </div>
  );
};

NewApi.propTypes = {
  toast: PropTypes.func,
};

export default NewApi;
