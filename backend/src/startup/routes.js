const bodyParser = require("body-parser");
const user = require("../routes/user");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use("/api/user", user);
};
