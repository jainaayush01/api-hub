require("dotenv").config();
const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");
const auth = require("../middlewares/auth");

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * @method - POST
 * @route - /api/user/signup
 * @description - User SignUp
 */

router.post(
  "/signup",
  [
    check("name", "Please enter a valid Name").not().isEmpty(),
    check("email", "Please enter a valid Email").isEmail(),
    check("password", "Please enter a valid Password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errorType: "Bad Request",
        errorMessage: "Validation Error",
        // errors: errors.array(), // do not send which fields are missing or incorrect as it may give away your model's fields which are required required
      });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });

      if (user) {
        return res.status(400).json({
          success: false,
          errorType: "Bad Request",
          errorMessage: "User already Exists",
        });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, JWT_SECRET, (err, token) => {
        if (err) {
          throw err;
        }

        res.status(200).json({
          success: true,
          token: token,
          message: "Registration Successful",
        });
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        errorType: "Internal Server Error",
        errorMessage: "Internal Server Error",
      });
    }
  },
);

/**
 * @method - POST
 * @route - /api/user/login
 * @description - User Login
 */

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errorType: "Bad Request",
        errorMessage: "Validation Error",
        // errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          success: false,
          errorType: "Bad Request",
          errorMessage: "Incorrect email and password", // user dne
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          errorType: "Bad Request",
          errorMessage: "Incorrect email and password", // incorrect password
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, JWT_SECRET, (err, token) => {
        if (err) {
          throw err;
        }

        res.status(200).json({
          success: true,
          token: token,
          message: "Login Successful",
        });
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        errorType: "Internal Server Error",
        errorMessage: "Internal Server Error",
      });
    }
  },
);

router.get("/protected", auth, async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route only accessible to user",
  });
});

module.exports = router;
