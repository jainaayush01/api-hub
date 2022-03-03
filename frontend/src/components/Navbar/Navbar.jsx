import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      setAuthenticated(true);
    }
  });
  // removed [] because when user login or registers the navbar component doesnt re-render but we need the authenticated state to change so we re-render navbar

  return (
    <header className={styles.navbar}>
      <Logo />
      {authenticated ? (
        <div className={styles.rightNav}>
          <div className={styles.navLinks}>
            <div
              className={styles.rightNavItem}
              onClick={() => navigate("/myapis")}
            >
              My APIs
            </div>
            <div
              className={styles.rightNavItem}
              onClick={() => navigate("/myaccount")}
            >
              My Account
            </div>
          </div>
          <div
            className={styles.rightNavBtn}
            onClick={() => navigate("/newapi")}
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
