import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SkyLight from "react-skylight";

import APIModal from "../ApiModal/ApiModal";
import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";

const Header = ({ auth }) => {
  const navigate = useNavigate();
  const newApiModal = useRef();

  const modalStyle = {
    position: "absolute",
    width: "498px",
    height: "515px",
    left: "595px",
    top: "140px",
    margin: "0 auto",
    border: "1px solid #dfe0e0",
    boxSizing: "border-box",
    borderRadius: "10px",
  };

  return (
    <header className={styles.navbar}>
      <Logo />
      <SkyLight
        dialogStyles={modalStyle}
        hideOnOverlayClicked
        ref={newApiModal}
      >
        <APIModal />
      </SkyLight>
      {auth ? (
        <div className={styles.rightNav}>
          <div className={styles.rightNavItem}>My APIs</div>
          <div className={styles.rightNavItem}>My Account</div>
          <div
            className={styles.rightNavBtn}
            onClick={() => newApiModal.current.show()}
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
