import React, { useEffect, useState } from "react";
import styles from "./UserDashboard.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { ApiCard, Navbar } from "../../components";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserDashboard = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [userApis, setUserApis] = useState([]);
  useEffect(async () => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      let res = await fetch(`${BACKEND_URL}/api/apis/user/all`, {
        method: "GET",
        headers: { token: authToken },
      });

      console.log(res.status);
      if (!res.ok) {
        res = await res.json();
        console.log(res);
      } else {
        res = await res.json();
        setUserApis([...res.apis]);
        console.log(res);
      }

      setAuth(true);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="UserDashboard">
      <ToastContainer />
      <Navbar auth={auth} />
      <div className={styles.body}>
        <div className={styles.cards}>
          <div className={styles.cardsHeading}>Your Uploaded APIs</div>
          {userApis.length !== 0 ? (
            <div className={styles.cardsList}>
              {userApis.map((elem, idx) => {
                return (
                  <ApiCard
                    key={idx}
                    apiName={elem.name}
                    apiDescription={elem.description}
                    apiEndpoint={elem.endpoint}
                  />
                );
              })}
            </div>
          ) : (
            <div className={styles.secondaryText}>
              No Published APIs available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
