import React from "react";
import styles from "./Register.module.scss";

import Logo from "../../components/Logo/Logo";
import profileImage from "../../assets/profileImage.png";

const Register = () => {
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
          <div className={styles.registerForm}>
						<div className={styles.formH1}>Register your account</div>
						<input
              className={styles.inputField}
              type="text"
              placeholder="Name"
            />
            <input
              className={styles.inputField}
              type="email"
              placeholder="Email address"
            />
            <input
              className={styles.inputField}
              type="password"
              placeholder="Password"
            />

            <div className={styles.registerBtn}>Register now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
