/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Playground.module.scss";
import { Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Headers from "./Tabs/HeadersTab";
import Query from "./Tabs/QueryTab";
import JsonBody from "./Tabs/JsonTab";
import { generateURL, convertArrayToObject } from "../../utils";

const Playground = () => {
  const [headerFields, setHeaderFields] = useState([]);
  const [queryFields, setQueryFields] = useState([]);
  const [json, setJson] = useState("");
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState("");

  const panes = [
    {
      menuItem: "Headers",
      render: () => (
        <Headers
          headerFields={headerFields}
          setHeaderFields={setHeaderFields}
        />
      ),
    },
    {
      menuItem: "Query",
      render: () => (
        <Query queryFields={queryFields} setQueryFields={setQueryFields} />
      ),
    },
    {
      menuItem: "JSON",
      render: () => <JsonBody json={json} setJson={setJson} />,
    },
  ];

  const handleRequest = async () => {
    const headers = convertArrayToObject(headerFields);
    let body = null;
    if (method !== "GET") {
      body = JSON.stringify(json);
    }
    try {
      let reqUrl = url;
      if (queryFields.length > 0) {
        reqUrl = generateURL(url, queryFields);
        setUrl(reqUrl);
      }

      var resClone;
      let res = await fetch(reqUrl, {
        method: method,
        headers: headers,
        body: body,
      });
      resClone = res.clone();
      res = await res.json();
      setResponse(JSON.stringify(res));
    } catch (err) {
      let textt = await resClone.text();
      setResponse(textt);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.requestWrapper}>
        <select
          className={styles.selectInput}
          onChange={(e) => setMethod(e.target.value)}
          defaultValue={method}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PATCH">PATCH</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          className={styles.urlInput}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://some-url.com/path"
        />
        <div className={styles.sendBtn} onClick={handleRequest}>
          Send
        </div>
      </div>
      <div className={styles.tabsWrapper}>
        <Tab panes={panes} renderActiveOnly={true} />
      </div>
      <div className={styles.responseWrapper}>{response}</div>
    </div>
  );
};

export default Playground;
