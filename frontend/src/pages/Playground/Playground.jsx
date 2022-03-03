/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Playground.scss";
import {
  Container,
  Select,
  Input,
  Button,
  Icon,
  Tab,
  Form,
  Dropdown,
  IconGroup,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const reqMethods = [
  { key: "GET", value: "GET", text: "GET", selected: true },
  { key: "POST", value: "POST", text: "POST" },
];

function OneField({
  props,
  handleRemoveHeader,
  idx,
  handleKeyValuePairChange,
}) {
  const [keyValuePair, setKeyValuePair] = useState({ key: "", value: "" });
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setKeyValuePair({ key: props.key, value: props.value });
    setKey(props.key);
    setValue(props.value);
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
    <div id={idx}>
      <Input value={key} onChange={handleKey} />
      <Input value={value} onChange={handleValue} />
      {props.key}
      {props.value}
      <Button onClick={handleRemoveHeader}>-</Button>
    </div>
  );
}

function Headers({ fields, setFields }) {
  const handleAddHeader = () => {
    setFields([...fields, { key: "hello", value: "hi" }]);
  };
  const handleRemoveHeader = (e) => {
    let id = parseInt(e.target.parentElement.id);
    if (id === 0 && fields.length === 1) {
      setFields([]);
    } else {
      let newFields1 = fields.slice(0, id);
      let newFields2 = fields.slice(id + 1);

      setFields([...newFields1, ...newFields2]);
    }
  };

  const handleKeyValuePairChange = (idx, keyValuePair) => {
    let newFields = [...fields];
    newFields[idx] = { key: keyValuePair.key, value: keyValuePair.value };
    setFields([...newFields]);
  };

  return (
    <Tab.Pane>
      {fields.map((elem, idx) => {
        return (
          <div key={idx}>
            <OneField
              props={elem}
              idx={idx}
              handleRemoveHeader={handleRemoveHeader}
              handleKeyValuePairChange={handleKeyValuePairChange}
            />
          </div>
        );
      })}
      <Button onClick={handleAddHeader}>Add</Button>
    </Tab.Pane>
  );
}

function Query({ queryFields, setQueryFields }) {
  const handleAddHeader = () => {
    setQueryFields([...queryFields, { key: "hello", value: "hi" }]);
  };
  const handleRemoveHeader = (e) => {
    let id = parseInt(e.target.parentElement.id);
    if (id === 0 && queryFields.length === 1) {
      setQueryFields([]);
    } else {
      let newFields1 = queryFields.slice(0, id);
      let newFields2 = queryFields.slice(id + 1);

      setQueryFields([...newFields1, ...newFields2]);
    }
  };

  const handleKeyValuePairChange = (idx, keyValuePair) => {
    let newFields = [...queryFields];
    newFields[idx] = { key: keyValuePair.key, value: keyValuePair.value };
    setQueryFields([...newFields]);
  };

  return (
    <Tab.Pane>
      {queryFields.map((elem, idx) => {
        return (
          <div key={idx}>
            <OneField
              props={elem}
              idx={idx}
              handleRemoveHeader={handleRemoveHeader}
              handleKeyValuePairChange={handleKeyValuePairChange}
            />
          </div>
        );
      })}
      <Button onClick={handleAddHeader}>Add</Button>
    </Tab.Pane>
  );
}

function Json({ json, setJson }) {
  const handleChange = (e) => {
    setJson(e.target.value);
  };
  return (
    <Tab.Pane>
      <Form.TextArea type="textarea" value={json} onChange={handleChange} />
    </Tab.Pane>
  );
}

const panes = [
  {
    menuItem: "Headers",
    render: (props) => (
      <Headers fields={props.fields} setFields={props.setFields} />
    ),
  },
  {
    menuItem: "Query",
    render: (props) => (
      <Query
        queryFields={props.queryFields}
        setQueryFields={props.setQueryFields}
      />
    ),
  },
  {
    menuItem: "JSON",
    render: (props) => <Json json={props.json} setJson={props.setJson} />,
  },
];

const generateURL = (url, queryFields) => {
  let str = "";

  queryFields.forEach((obj, idx) => {
    console.log(obj.key);
    console.log(obj.value);
    str = str + "&" + obj.key + "=" + obj.value;
    console.log(str);
  });
  str = str.slice(1);
  console.log(str.slice(1));
  let tempUrl = url;
  if (tempUrl.includes("?")) {
    tempUrl = url + "&" + str;
  } else {
    tempUrl = url + "?" + str;
  }
  console.log(tempUrl);
};

const Playground = () => {
  const [fields, setFields] = useState([]);
  const [queryFields, setQueryFields] = useState([]);
  const [json, setJson] = useState("{}");
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState({
    message: "hii",
  });

  const handleRequest = async () => {
    console.log(fields);
    console.log(queryFields);
    console.log(json);
    console.log(url);
    console.log(method);
    let body = null;

    if (method !== "GET") {
      body = JSON.stringify(json);
    }
    try {
      let tempUrl = url;
      if (queryFields.length > 0) {
        tempUrl = generateURL(url, queryFields);
        setUrl(tempUrl);
      }

      var resClone;
      let res = await fetch(tempUrl, {
        method: method,
        headers: fields,
        body: body,
      });
      resClone = res.clone();
      console.log({ res });
      res = await res.json();
      setResponse(res);
      console.log(res);
    } catch (err) {
      console.log(err);
      let textt = await resClone.text();
      console.log(textt);
      setResponse(textt);
    }
  };

  return (
    <div className="Playground">
      <Container style={{ margin: 20 }}>
        <Container>
          <Select
            onChange={(e, { value }) => {
              setMethod(value);
              console.log(value);
            }}
            placeholder="Select Req Method"
            options={reqMethods}
          />
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://some-url.com/path"
          />
          <Button onClick={handleRequest} animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Container>
        <Container>
          <Tab
            panes={panes}
            fields={fields}
            setFields={setFields}
            queryFields={queryFields}
            setQueryFields={setQueryFields}
            json={json}
            setJson={setJson}
            renderActiveOnly={true}
          />
        </Container>
        <Container>{JSON.stringify(response)}</Container>
      </Container>
    </div>
  );
};

export default Playground;
