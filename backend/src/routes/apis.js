require("dotenv").config();
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const API = require("../models/API.js");
const User = require("../models/User");
const auth = require("../middlewares/auth");

router.get("/all", async (req, res) => {
  try {
    let apis = await API.find({});
    return res.status(200).json({ apis });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
});

router.get("/user/all", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.body.user.id });
    let apiIds = user.apis.map((item) => {
      return item._id;
    });

    let apis = await API.find({ _id: { $in: apiIds } });
    return res.status(200).json({ apis });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
});

router.post(
  "/new",
  auth,
  [
    check("name", "Please enter a valid Name.").not().isEmpty(),
    check("endpoint", "Please enter a valid endpoint").isURL(),
    check("description", "Please enter a valid description").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Bad Request Error",
        errors: errors.array(),
      });
    }
    const _user = req.body.user;
    const { name, endpoint, description } = req.body;
    try {
      let api = new API({
        name,
        endpoint,
        description,
        userId: _user.id,
      });
      await api.save();

      let user = await User.findOne({ _id: _user.id });
      user.apis.push(api.id);
      await user.save();

      return res.status(200).json({
        message: "success",
        api: api,
        user: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
  },
);

router.get(
  "/:apiId",
  [check("apiId", "Please enter a valid Id").isMongoId().not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation Error",
        errors: errors.array(),
      });
    }
    try {
      let api = await API.findOne({ _id: req.params.apiId });
      return res.status(200).json({ api });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
  },
);

router.delete(
  "/:apiId",
  auth,
  [check("apiId", "Please enter a valid Id").isMongoId().not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation Error",
        errors: errors.array(),
      });
    }
    try {
      let { deletedCount } = await API.deleteOne({ _id: req.params.apiId });
      if (deletedCount) {
        return res.status(200).json({
          message: "Successfuly Deleted",
          deletedCount,
        });
      } else {
        return res.status(201).json({
          message: "No such API found",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
  },
);

router.patch(
  "/:apiId",
  auth,
  [
    check("apiId", "Please enter a valid Id").isMongoId().not().isEmpty(),
    check("name", "Please enter a valid Name.").optional().not().isEmpty(),
    check("endpoint", "Please enter a valid endpoint").optional().isURL(),
    check("description", "Please enter a valid description")
      .optional()
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation Error",
        errors: errors.array(),
      });
    }
    try {
      let api = await API.findOne({ _id: req.params.apiId });
      if (api.userId != req.body.user.id) {
        // !== gives error since we have stored api.userId as MongoDb Object Id
        return res.status(400).json({
          message: "This API is not owned by this user.",
        });
      }
      const { name, endpoint, description } = req.body;

      if (!name && !endpoint && !description) {
        return res.status(400).json({
          message: "Provide a field to update.",
        });
      }

      if (name) {
        api.name = name;
      }
      if (endpoint) {
        api.endpoint = endpoint;
      }
      if (description) {
        api.description = description;
      }

      await api.save();
      return res.status(200).json({ api });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
  },
);

module.exports = router;
