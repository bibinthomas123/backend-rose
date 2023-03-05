const recieptent = require("../model/recieptent");

exports.newRecieptent = async (req, res) => {
  try {
    const newRecieptent = new recieptent({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      bloodGroup: req.body.bloodGroup,
      anyDieases: req.body.anyDieases,
      role: "recieptent",
    });
    await newRecieptent.save();
    res.status(201).json({ message: "New Recieptent added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecieptent = async (req, res) => {
  try {
    const getAll = await recieptent.find({}).select("-__v");
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await recieptent.find({ _id: id }).select("-__v");
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteRecep = async (req, res) => {
  const { id } = req.params;
  try {
    await recieptent.deleteOne({ _id: id });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRecap = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await recieptent.findByIdAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    res.status(200).json({
      status: "success",
      message: "Updated",
    });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

// Path: controllers\recieptent.js

// Path: model\recieptent.js
