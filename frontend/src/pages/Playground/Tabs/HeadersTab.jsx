/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Tab.module.scss";
import { Button, Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import InputField from "./InputField";

function Headers({ headerFields, setHeaderFields }) {
  const handleAddHeader = () => {
    setHeaderFields([...headerFields, { key: "", value: "" }]);
  };

  const handleRemoveHeader = (e) => {
    let id = parseInt(e.target.parentElement.id);
    if (id === 0 && headerFields.length === 1) {
      setHeaderFields([]);
    } else {
      let newHeaderFields1 = headerFields.slice(0, id);
      let newHeaderFields2 = headerFields.slice(id + 1);

      setHeaderFields([...newHeaderFields1, ...newHeaderFields2]);
    }
  };

  const handleKeyValuePairChange = (idx, keyValuePair) => {
    let newHeaderFields = [...headerFields];
    newHeaderFields[idx] = { key: keyValuePair.key, value: keyValuePair.value };
    setHeaderFields([...newHeaderFields]);
  };

  return (
    <Tab.Pane style={{ fontFamily: "DM Sans" }} className={styles.tabPane}>
      <Button className={styles.addBtn} onClick={handleAddHeader}>
        Add
      </Button>
      <div className={styles.fieldWrapper}>
        {headerFields.map((header, idx) => {
          return (
            <div key={idx}>
              <InputField
                elem={header}
                idx={idx}
                handleRemove={handleRemoveHeader}
                handleKeyValuePairChange={handleKeyValuePairChange}
              />
            </div>
          );
        })}
      </div>
    </Tab.Pane>
  );
}

export default Headers;
