const bodyParser = require("body-parser");
const user = require("../routes/user");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/user", user);
};
