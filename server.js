const express = require("express");
require("dotenv").config();
const connection = require("./config/database");
const cors = require("cors");
const attendeesRoute = require("./routes/attendeesRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/attendees", attendeesRoute);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

connection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
