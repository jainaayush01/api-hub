import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

import styles from "./UserDashboard.module.scss";

import { ApiCard } from "../../components";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserDashboard = () => {
  const navigate = useNavigate();
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
    } else {
      navigate("/login");
    }
  }, []);

  return (
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
                  apiId={elem._id}
                  edit={true}
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
  );
};

// UserDashboard.propTypes = {
//   toast: PropTypes.object,
// };

export default UserDashboard;
