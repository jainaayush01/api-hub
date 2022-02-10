import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Register.module.scss";

import Logo from "../../components/Logo/Logo";
import profileImage from "../../assets/profileImage.png";
import { postData } from "../../utils/fetchData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    let res = await postData(`${BACKEND_URL}/api/user/signup`, {
      name,
      email,
      password,
    });
    console.log(res);
    if (res.message) {
      // @TODO: display Error Message
      toast.error(res.message);
      res.errors.map((error) => {
        console.log(error.msg);
        toast.error(error.msg);
      });
      return;
    } else {
      // @TODO: redirect to dashboard With State
      navigate(`/`);
      sessionStorage.setItem("Auth Token", res.token);
      console.log("Registration Successfull!!");
    }
  };

  return (
    <div className={styles.register}>
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
    </div>
  );
};

export default Register;
