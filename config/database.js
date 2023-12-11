const mongoose = require("mongoose");

const DB_URL = `mongodb+srv://tickera:tickera123@tickera.7qlqr7k.mongodb.net/`;

const connection = async () => {
  try {
    mongoose.connect(DB_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
