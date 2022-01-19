import React from "react";
import styles from "./Logo.module.scss";

import LogoImage from "../../assets/main-logo.svg";

const Logo = () => {
  return <img src={LogoImage} className={styles.logo} />;
};

export default Logo;
