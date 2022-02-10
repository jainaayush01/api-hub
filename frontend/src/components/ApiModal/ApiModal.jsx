import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./ApiModal.module.scss";
import { postData } from "../../utils/fetchData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ApiModal = () => {
  const navigate = useNavigate();
  const [apiName, setApiName] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiDescription, setApiDescription] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let authToken = sessionStorage.getItem("Auth Token");
    postData(`${BACKEND_URL}/api/apis/new`, {
      name: apiName,
      endpoint: apiEndpoint,
      description: apiDescription,
      token: authToken,
    })
      .then(async (res) => {
        if (!res.ok) {
          console.log(res.status);
          res = await res.json();
          console.log(res);
        } else {
          console.log(res.status);
          res = await res.json();
          console.log(res);
          navigate("/account");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.apiModal}>
      <ToastContainer />
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
  );
};

export default ApiModal;
