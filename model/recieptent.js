const mongoose = require("mongoose");
const validator = require("validator");

const recieptent = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
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
      validate: [validator.isMobilePhone, "please enter a valid mobile number"],
    },
    address: {
      type: String,
      required: [true, "Please provide an address"],
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O-", "O+", "AB+", "AB-"],
      required: [true, "Please provide a blood group"],
    },
    anyDieases: {
      type: Boolean,
      required: [true, "Please provide any diseases (if any)"],
    },
    role: {
      type: String,
      enum: ["donor", "recieptent"],
    },
    urgent: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("recieptents", recieptent);
