const recieptent = require("../model/recieptent");
const donor = require("../model/donor");

exports.newRecieptent = async (req, res) => {
  try {
    const newRecieptent = new recieptent({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      bloodGroup: req.body.bloodGroup,
      anyDieases: req.body.anyDieases,
    });
    const savedRecieptent = await newRecieptent.save();
    res.status(201).json(savedRecieptent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecieptent = async (req, res) => {
  try {
    const getAll = await recieptent.find({});
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await recieptent.find({ _id: id });
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

exports.stats = async (req, res) => {
  try {
    const data = {};
    const bloodGroup = {
      donor: {},
      recieptents: {},
    };
    await recieptent.find({}).then((recieptents) => {
      data.NoOfrecieptents = recieptents.length;

      recieptents.forEach((recieptent) => {
        if (bloodGroup.recieptents[recieptent.bloodGroup]) {
          bloodGroup.recieptents[recieptent.bloodGroup] += 1;
        } else {
          bloodGroup.recieptents[recieptent.bloodGroup] = 1;
        }
      });
    });
    await donor.find({}).then((donors) => {
      data.NoOfdonors = donors.length;

      donors.forEach((donor) => {
        if (bloodGroup.donor[donor.bloodGroup.donor]) {
          bloodGroup.donor[donor.bloodGroup] += 1;
        } else {
          bloodGroup.donor[donor.bloodGroup] = 1;
        }
      });
    });
    res.status(200).json(bloodGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Path: controllers\recieptent.js

// Path: model\recieptent.js
