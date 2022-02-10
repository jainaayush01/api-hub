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
        message: "Validation Error",
        errors: errors.array(),
      });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });

      if (user) {
        return res.status(400).json({
          message: "Bad Request Error",
          errors: {
            msg: "Existing user found. Please LogIn!",
          },
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

      jwt.sign(payload, JWT_SECRET, { expiresIn: 10000 }, (err, token) => {
        if (err) {
          throw err;
        }

        res.status(200).json({
          token,
        });
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        message: "Internal Server Error",
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
        message: "Validation Error!",
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: "User does not exist. Please register your account!",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Password is incorrect. Please try again!",
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) {
          throw err;
        }

        res.status(200).json({
          token,
        });
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
);

router.get("/protected", auth, async (req, res) => {
  console.log(req.body.user);
  res.status(200).json({
    message: "Protected Route only accessible to user",
  });
});

module.exports = router;
