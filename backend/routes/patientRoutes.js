const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const authController = require("../controllers/authController");

router
  .route("/getpatient/:id")
  .get(
    authController.protect,
    authController.restrictTo("administrator"),
    patientController.getpatient
  );
module.exports = router;
