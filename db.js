const mongoose = require("mongoose");

// define mongodb connection URL
const mongoURL = "mongodb://127.0.0.1:27017/hotels";

// setup mongodb connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// get the default connection
// mongoose maintains a default connection object representing the mongodb connection.
const db = mongoose.connection;

// define event listeners for database connection
db.on("connected", () => {
  console.log("connected to mongoDB.");
});
db.on("error", () => {
  console.log("error to mongoDB.");
});
db.on("disconnected", () => {
  console.log("disconnected to mongoDB.");
});

module.exports = db;
