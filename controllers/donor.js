const donor = require("../model/donor");
const recieptent = require("../model/recieptent");

exports.newDonor = async (req, res) => {
  try {
    const newDonnor = new donor({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      bloodGroup: req.body.bloodGroup,
      anyDieases: req.body.anyDieases,
    });
    const savedRecieptent = await newDonnor.save();
    res.status(201).json(savedRecieptent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDonor = async (req, res) => {
  try {
    const getAll = await donor.find({});
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await donor.find({ _id: id });
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDonor = async (req, res) => {
  const { id } = req.params;
  try {
    await donor.deleteOne({ _id: id });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Path: controllers\donor.js

// Path: model\donor.js
