import React from "react";
import styles from "./Navbar.module.scss";

import Logo from "../../assets/main-logo.svg";

const Header = () => {
  return (
    <header className={styles.navbar}>
      {/* <div className="Logo"> */}
      <img src={Logo} className={styles.logo} />
      {/* <Logo height="29.24px" width="120px" /> */}
      {/* </div> */}
      <div className={styles.rightNav}>
        {/* <div className={styles.rig}>
        <ul className={styles.list}>
        <li>
        My APIs
        </li>
        <li>
        My Account
        </li>
        </ul>
      </div> */}
        <div className={styles.loginBtn}>Login/Signup</div>
      </div>
    </header>
  );
};

export default Header;
