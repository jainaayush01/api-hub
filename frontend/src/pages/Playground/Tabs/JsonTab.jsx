/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Tab.module.scss";
import { Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function JsonBody({ json, setJson }) {
  const handleChange = (e) => {
    setJson(e.target.value);
  };

  return (
    <Tab.Pane className={styles.tabPane}>
      <div className={styles.fieldWrapper}>
        <textarea
          className={styles.textArea}
          type="textarea"
          value={json}
          onChange={handleChange}
        />
      </div>
    </Tab.Pane>
  );
}

export default JsonBody;
