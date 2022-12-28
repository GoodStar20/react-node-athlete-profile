const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    sports: [
      {
        type: String,
      },
    ],
    about: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    team: {
      type: String,
    },

    interests: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Profile = mongoose.model("Profile", ProfileSchema);
