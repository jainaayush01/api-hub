/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./Tab.module.scss";
import { Input, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function InputField({ elem, idx, handleRemove, handleKeyValuePairChange }) {
  const [keyValuePair, setKeyValuePair] = useState({ key: "", value: "" });
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setKeyValuePair({ key: elem.key, value: elem.value });
    setKey(elem.key);
    setValue(elem.value);
  }, []);

  const handleKey = (e) => {
    setKey(e.target.value);
    setKeyValuePair({ ...keyValuePair, key: e.target.value });
    handleKeyValuePairChange(
      parseInt(e.target.parentElement.parentElement.id),
      {
        value: value,
        key: e.target.value,
      },
    );
  };

  const handleValue = (e) => {
    setValue(e.target.value);
    setKeyValuePair({ ...keyValuePair, value: e.target.value });
    handleKeyValuePairChange(
      parseInt(e.target.parentElement.parentElement.id),
      {
        key: key,
        value: e.target.value,
      },
    );
  };

  return (
    <div id={idx} className={styles.inputWrapper}>
      <Input
        style={{ fontFamily: "DM Sans" }}
        className={styles.input}
        value={key}
        onChange={handleKey}
      />
      <Input
        style={{ fontFamily: "DM Sans" }}
        value={value}
        onChange={handleValue}
      />
      <Button className={styles.removeBtn} onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
}

export default InputField;
