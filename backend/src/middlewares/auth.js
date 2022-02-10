require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({ message: "Auth Error" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};
