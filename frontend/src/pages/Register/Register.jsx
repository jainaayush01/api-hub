import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Register.module.scss";

import profileImage from "../../assets/profileImage.png";
import { fetchData } from "../../utils";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Register = ({ toast }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetchData("POST", `${BACKEND_URL}/api/user/signup`, {
        name,
        email,
        password,
      });
      if (res.success) {
        navigate("/myapis");
        sessionStorage.setItem("Auth Token", res.token);
        toast.success(res.message);
      } else {
        toast.error(res.errorMessage);
      }
    } catch (err) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.infoBox}>
        <div className={styles.infoCard}>
          <div className={styles.profileImage}>
            <img src={profileImage} alt="profileImage" />
          </div>
          <div className={styles.textBox}>
            <div className={styles.primaryText}>Welcome to your Dashboard</div>
            <div className={styles.secondaryText}>
              Your uploaded APIs will be displayed here once you register your
              account
            </div>
          </div>
        </div>
      </div>
      <div className={styles.registerBox}>
        <form className={styles.registerForm}>
          <div className={styles.formH1}>Register your account</div>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.inputField}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.inputField}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.registerBtn} onClick={handleOnSubmit}>
            Register now
          </div>
          <div
            className={styles.loginLink}
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have a account?
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  toast: PropTypes.func,
};

export default Register;
