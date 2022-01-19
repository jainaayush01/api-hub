import React from "react";
import styles from "./Navbar.module.scss";

import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <Logo />
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
