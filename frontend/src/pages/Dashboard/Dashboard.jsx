import React from "react";
import styles from "./Dashboard.module.scss";

import Navbar from "../../components/Navbar/Navbar";
import ApiCard from "../../components/ApiCard/ApiCard";
import Banner from "../../components/Banner/Banner";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navbar />
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
