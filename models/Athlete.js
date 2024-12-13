const mongoose = require("mongoose");

const athleteSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  physicallyChallenged: { type: Boolean, required: false },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  eventName: { type: String, required: true },
  athleteCategory: { type: String, required: true },
  sportCategory: { type: String, required: true },
  identityLink: { type: String, required: true },
  photoLink: { type: String, required: true },
  referredBy: { type: String, required: true  },
}, { timestamps: true });

module.exports = mongoose.model("Athlete", athleteSchema);