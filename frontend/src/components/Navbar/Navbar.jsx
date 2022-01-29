import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";

const Header = ({ auth }) => {
  const navigate = useNavigate();
  return (
    <header className={styles.navbar}>
      <Logo />
      <div className={styles.rightNav}>
        {auth ? (
          <div>
            <div className={styles.rig}>
              <ul className={styles.list}>
                <li>My APIs</li>
                <li>My Account</li>
              </ul>
            </div>
            <div className={styles.loginBtn} onClick={() => navigate("/login")}>
              + New API
            </div>
          </div>
        ) : (
          <div className={styles.loginBtn} onClick={() => navigate("/login")}>
            Login/Signup
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
