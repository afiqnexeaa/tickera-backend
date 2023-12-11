const Attendees = require("../models/AttendeesSchema");

const getAttendees = async (req, res) => {
  return res.json({ message: "ADaw" });
};

const createAttendees = async (req, res) => {
  try {
    const { buyerInfo, ticketHolder } = req.body;
    const attendees = [buyerInfo, ...ticketHolder];
    const attendeesEmail = attendees.map((item) => item.email);
    const flattenUniqueEmail = new Set(attendeesEmail);

    if ([...flattenUniqueEmail].length < attendeesEmail.length) {
      return res.status(400).json({ message: "Please use different email" });
    }

    const result = await Attendees.create(attendees);

    return res.status(200).json({ message: "Mantap" });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = { createAttendees, getAttendees };
