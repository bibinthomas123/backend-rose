const donor = require("../model/donor");



// donor.deleteMany({}).then(() => { 
//   console.log("deleted all donors");
// });


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

    await newDonnor.save();
    res.status(201).json({
      status: "success",
      message: "New Donnor added successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDonor = async (req, res) => {
  try {
    const getAll = await donor.find({}).select("-__v");
    res.status(200).json({
      status: "success",
      data: getAll,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      error: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await donor.find({ _id: id }).select("-__v");
    res.status(200).json({
      status: "success",
      data: person,
    });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

exports.deleteDonor = async (req, res) => {
  const { id } = req.params;
  try {
    await donor.deleteOne({ _id: id });
    res.status(200).json({
      status: "success",
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

exports.updateDonor = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await donor.findByIdAndUpdate({ _id: id }, { $set: req.body });
    res.status(200).json({
      status: "success",
      message: "Updated",
    });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

// Path: controllers\donor.js
// Path: model\donor.js
