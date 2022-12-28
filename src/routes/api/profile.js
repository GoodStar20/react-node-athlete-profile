const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const Profile = require("../../models/Profile");

const profileValidate = [
  check("name", "Name is required").notEmpty(),
  check("dob", "Date of birth is required").notEmpty(),
  check("gender", "Gender is required").notEmpty(),
  check("location", "First Name is required").notEmpty(),
];

router.post("/new", profileValidate, async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).send(profiles);
  } catch (e) {
    res.status.send(e);
  }
});

router.put("/:id", profileValidate, async (req, res) => {
  const id = req.params.id;
  try {
    const profile = await Profile.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    await profile.save();
    res.status(201).send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
