import React, { useEffect, useState } from "react";
import styles from "./Marketplace.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar, ApiCard, Banner } from "../../components";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Marketplace = () => {
  const [auth, setAuth] = useState(false);
  const [allApis, setAllApis] = useState([]);

  useEffect(async () => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      setAuth(true);
    }

    let res = await fetch(`${BACKEND_URL}/api/apis/all`, {
      method: "GET",
    });

    console.log(res.status);
    if (!res.ok) {
      res = await res.json();
      console.log(res);
    } else {
      res = await res.json();
      setAllApis([...res.apis]);
      console.log(res);
    }
  }, []);

  return (
    <div className="Marketplace">
      <ToastContainer />
      <Navbar auth={auth} />
      <div className={styles.body}>
        <Banner />
        <div className={styles.cards}>
          <div className={styles.cardsHeading}>All APIs</div>
          {allApis.length !== 0 ? (
            <div className={styles.cardsList}>
              {allApis.map((elem, idx) => {
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

export default Marketplace;
