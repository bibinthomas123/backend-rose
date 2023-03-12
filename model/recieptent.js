const mongoose = require("mongoose");
const validator = require("validator");

const recieptent = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please provide a name"],
    },
    lname: {
      type: String,
    },
    DOB: {
      type: String,
      required: [true, "Please provide a DOB"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "please provide a valid email "],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    address: {
      type: String,
      required: [true, "Please provide a address"],
    },
    occupation: {
      type: String,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O-", "O+", "AB+", "AB-"],
      require: [true, "Please provide a blood group"],
    },
    didDonateBlood: {
      type: Boolean,
      required: [true, "Please provide a didDonateBlood"],
    },
    anyAllergies: {
      type: Boolean,
      required: [true, "Please provide a allergies (if any)"],
    },
    cardiacProblem: {
      type: Boolean,
      required: [true, "Please provide a cardiacProblem (if any)"],
    },
    anyDieases: {
      type: Boolean,
      required: [true, "Please provide a dieases (if any)"],
    },
    urgent: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: {
      type: String,
      enum: ["donor", "recieptent"],
    },
    view: {
      type: Boolean,
      default: function () {
        return !this.anyDieases;
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("recieptent", recieptent);
