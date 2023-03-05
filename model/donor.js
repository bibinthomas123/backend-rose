const mongoose = require("mongoose");
const validator = require("validator");

const donor = new mongoose.Schema(
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
      required: [true, "Please provide a address"],
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O-", "O+", "AB+", "AB-"],
      require: [true, "Please provide a blood group"],
    },
    anyDieases: {
      type: Boolean,
      required: [true, "Please provide a dieases (if any)"],
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

module.exports = mongoose.model("donor", donor);
