import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.scss";

import LogoImage from "../../assets/apiHubLogo.png";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      src={LogoImage}
      className={styles.logo}
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
