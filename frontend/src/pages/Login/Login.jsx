import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

import Logo from "../../components/Logo/Logo";
import profileImage from "../../assets/profileImage.png";
import { postData } from "../../utils/fetchData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    postData(`${BACKEND_URL}/api/user/login`, { email, password })
      .then(async (res) => {
        console.log(res);
        if (!res.ok) {
          // @TODO: display Error Message
          console.log(res.status);
          // console.log(res.json());
          console.log(res.message);
          return;
        } else {
          // @TODO: redirect to dashboard With State
          console.log(res.status);
          let data = await res.json();
          navigate(`/`);
          console.log(data);
          console.log("Login Successfull!!")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.login}>
      <div className={styles.navbar}>
        <Logo />
      </div>
      <div className={styles.body}>
        <div className={styles.infoBox}>
          <div className={styles.infoCard}>
            <div className={styles.profileImage}>
              <img src={profileImage} alt="profileImage" />
            </div>
            <div className={styles.textBox}>
              <div className={styles.primaryText}>
                Welcome to your Dashboard
              </div>
              <div className={styles.secondaryText}>
                Your uploaded APIs will be displayed here once you login to your
                account
              </div>
            </div>
          </div>
        </div>
        <div className={styles.loginBox}>
          <div className={styles.loginForm}>
            <div className={styles.formH1}>Login to your account</div>
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

            <div className={styles.loginBtn} onClick={handleOnSubmit}>
              Login now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
