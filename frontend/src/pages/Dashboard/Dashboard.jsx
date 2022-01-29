import React, {useEffect, useState} from "react";
import styles from "./Dashboard.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/Navbar/Navbar";
import ApiCard from "../../components/ApiCard/ApiCard";
import Banner from "../../components/Banner/Banner";

const Dashboard = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      setAuth(true)
    }
  }, [])

  return (
    <div className="Dashboard">
      <ToastContainer />
      <Navbar auth={auth}/>
      <div className={styles.body}>
        <Banner />
        <div className={styles.cards}>
          <div className={styles.cardsHeading}>All APIs</div>
          <div className={styles.cardsList}>
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
