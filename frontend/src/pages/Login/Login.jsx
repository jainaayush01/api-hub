import React from "react";
import styles from "./Login.module.scss";

import Logo from "../../components/Logo/Logo";
import profileImage from "../../assets/profileImage.png";

const Login = () => {
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
						<div className={styles.formH1}>
							Login to your account
						</div>
						<input className={styles.emailInput} type="email" placeholder="Email address" />  
						<input className={styles.passwordInput} type="password" placeholder="Password" />

						<div className={styles.loginBtn}>Login now</div>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
