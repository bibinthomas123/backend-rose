const app = require("express");
const Router = app.Router();
const Recieptent = require("./controllers/recieptent");
const Donor = require("./controllers/donor");

Router.route("/recieptent")
  .post(Recieptent.newRecieptent)
  .get(Recieptent.getRecieptent);

Router.route("/recieptent/:id")
  .get(Recieptent.getById)
  .delete(Recieptent.deleteRecep);

Router.route("/donor").post(Donor.newDonor).get(Donor.getDonor);
Router.route("/donor/:id").get(Donor.getById).delete(Donor.deleteDonor);

Router.get("/stats", Recieptent.stats);
module.exports = Router;
