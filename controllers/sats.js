const recieptent = require("../model/recieptent");
const donor = require("../model/donor");

exports.stats = async (req, res) => {
  try {
   
    const bloodGroup = {
      donor: {},
      recieptents: {},
    };
    await recieptent.find({}).then((recieptents) => {
      bloodGroup.recieptents.NoOfrecieptents = recieptents.length;

      recieptents.forEach((recieptent) => {
        if (bloodGroup.recieptents[recieptent.bloodGroup]) {
          bloodGroup.recieptents[recieptent.bloodGroup] += 1;
        } else {
          bloodGroup.recieptents[recieptent.bloodGroup] = 1;
        }
      });
    });
    await donor.find({}).then((donors) => {
      bloodGroup.donor.NoOfdonors = donors.length;

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
