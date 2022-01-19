require("dotenv").config();
const express = require("express");
const app = express();

require("./startup/db")(); // db connection
require("./startup/routes")(app); // routes

// sample route
app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

// server establishment
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log("Backend server has started at " + PORT);
});
