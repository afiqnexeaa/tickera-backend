const express = require("express");
const {
  createAttendees,
  getAttendees,
} = require("../controller/AttendeesController");

const router = express.Router();

router.route("/getAttendees").get(getAttendees);
router.route("/createAttendees").post(createAttendees);

module.exports = router;
