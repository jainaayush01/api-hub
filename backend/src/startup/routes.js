const bodyParser = require("body-parser");
const user = require("../routes/user");
const bgremover = require("../routes/bgremover");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use("/api/user", user);
  app.use("/api/bgremover", bgremover);
};
