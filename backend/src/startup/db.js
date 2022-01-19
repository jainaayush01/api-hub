const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = () => {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connection Established"))
    .catch((err) => {
      console.log("Error connecting to Database: " + err);
    });
};

module.exports = connectDB;
