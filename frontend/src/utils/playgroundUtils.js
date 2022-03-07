const generateURL = (url, queryFields) => {
  let str = "";

  queryFields.forEach((obj) => {
    str = str + "&" + obj.key + "=" + obj.value;
  });
  str = str.slice(1);
  let reqUrl = url;
  if (reqUrl.includes("?")) {
    reqUrl = url + "&" + str;
  } else {
    reqUrl = url + "?" + str;
  }
  return reqUrl;
};

const convertArrayToObject = (objArr) => {
  let obj = {};
  objArr.forEach((elem) => {
    obj[elem["key"]] = elem["value"];
  });
  return obj;
};

export { convertArrayToObject, generateURL };
