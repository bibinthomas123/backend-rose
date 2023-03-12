const app = require("express");
const Router = app.Router();
const Recieptent = require("./controllers/recieptent");
const Donor = require("./controllers/donor");
const Stats = require("./controllers/sats");

Router.route("/recieptent")
  .post(Recieptent.newRecieptent)
  .get(Recieptent.getRecieptent);

Router.route("/recieptent/:id")
  .get( Recieptent.getById)
  .delete(Recieptent.deleteRecep)
  .patch(Recieptent.updateRecap);

Router.route("/donor").post(Donor.newDonor).get(Donor.getDonor);
Router.route("/donor/:id")
  .get(Donor.getById)
  .delete(Donor.deleteDonor)
  .patch(Donor.updateDonor);

Router.get("/stats", Stats.stats);
module.exports = Router;
