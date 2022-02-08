import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";

const Header = ({ auth }) => {
  const navigate = useNavigate();
  return (
    <header className={styles.navbar}>
      <Logo />
      {auth ? (
        <div className={styles.rightNav}>
          <div className={styles.rightNavItem}>My APIs</div>
          <div className={styles.rightNavItem}>My Account</div>
          <div
            className={styles.rightNavBtn}
            onClick={() => navigate("/login")}
          >
            + New API
          </div>
        </div>
      ) : (
        <div className={styles.rightNav}>
          <div
            className={styles.rightNavBtn}
            onClick={() => navigate("/login")}
          >
            Login/Signup
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
