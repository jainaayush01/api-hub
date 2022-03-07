/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Tab.module.scss";
import { Button, Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import InputField from "./InputField";

function Query({ queryFields, setQueryFields }) {
  const handleAddQuery = () => {
    setQueryFields([...queryFields, { key: "", value: "" }]);
  };

  const handleRemoveQuery = (e) => {
    let id = parseInt(e.target.parentElement.id);
    if (id === 0 && queryFields.length === 1) {
      setQueryFields([]);
    } else {
      let newQueryFields1 = queryFields.slice(0, id);
      let newQueryFields2 = queryFields.slice(id + 1);

      setQueryFields([...newQueryFields1, ...newQueryFields2]);
    }
  };

  const handleKeyValuePairChange = (idx, keyValuePair) => {
    let newQueryFields = [...queryFields];
    newQueryFields[idx] = { key: keyValuePair.key, value: keyValuePair.value };
    setQueryFields([...newQueryFields]);
  };

  return (
    <Tab.Pane className={styles.tabPane}>
      <Button className={styles.addBtn} onClick={handleAddQuery}>
        Add
      </Button>
      <div className={styles.fieldWrapper}>
        {queryFields.map((query, idx) => {
          return (
            <div key={idx}>
              <InputField
                elem={query}
                idx={idx}
                handleRemove={handleRemoveQuery}
                handleKeyValuePairChange={handleKeyValuePairChange}
              />
            </div>
          );
        })}
      </div>
    </Tab.Pane>
  );
}

export default Query;
