require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// env vars
const PORT = process.env.PORT || 8001;
const MONGODB_URI = process.env.MONGODB_URI;

// Database Connection
try {
  mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    () => console.log("Database Connection Established"),
  );
} catch (err) {
  console.log("Error connecting to Database: " + err);
}

// route
app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

// server establishment
app.listen(PORT, () => {
  console.log("Backend server has started at " + PORT);
});
