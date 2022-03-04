import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./EditApi.module.scss";
import { fetchData } from "../../utils/fetchData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const isDataSame = (apiData, apiName, apiEndpoint, apiDescription) => {
  if (apiName !== apiData.apiName) {
    return false;
  }
  if (apiEndpoint !== apiData.apiEndpoint) {
    return false;
  }
  if (apiDescription !== apiData.apiDescription) {
    return false;
  }
  return true;
};

const EditApi = ({ toast }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiName, setApiName] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiDescription, setApiDescription] = useState("");
  const [apiId, setApiId] = useState("");

  const handleOnEdit = async (e) => {
    e.preventDefault();
    let authToken = sessionStorage.getItem("Auth Token");
    const checkData = isDataSame(
      location.state,
      apiName,
      apiEndpoint,
      apiDescription,
    );
    if (checkData === true) {
      navigate("/myapis");
      toast.success("Details Updated Successfully");
    } else {
      try {
        let res = await fetchData(
          "PATCH",
          `${BACKEND_URL}/api/apis/${apiId}`,
          {
            name: apiName,
            endpoint: apiEndpoint,
            description: apiDescription,
          },
          authToken,
        );
        if (res.success) {
          toast.success(res.message);
          navigate("/myapis");
        } else {
          toast.error(res.errorMessage);
        }
      } catch (err) {
        toast.error("Internal Server Error");
      }
    }
    return;
  };
  const handleOnDelete = async (e) => {
    e.preventDefault();
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      try {
        let res = await fetchData(
          "DELETE",
          `${BACKEND_URL}/api/apis/${apiId}`,
          {},
          authToken,
        );
        if (res.success) {
          toast.success(res.message);
          navigate("/myapis");
        } else {
          toast.error(res.errorMessage);
        }
      } catch (err) {
        toast.error("Internal Server Error");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (location.state) {
      setApiName(location.state.apiName);
      setApiDescription(location.state.apiDescription);
      setApiEndpoint(location.state.apiEndpoint);
      setApiId(location.state.apiId);
    }
  }, []);

  return (
    <div className={styles.editApi}>
      <div className={styles.editContainer}>
        <div className={styles.h1}>Edit Your API</div>
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
        <div className={styles.editBtn} onClick={handleOnEdit}>
          Edit API
        </div>
        <div className={styles.deleteBtn} onClick={handleOnDelete}>
          Delete API
        </div>
      </div>
    </div>
  );
};

EditApi.propTypes = {
  toast: PropTypes.func,
};

export default EditApi;
