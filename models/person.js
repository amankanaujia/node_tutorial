const mongoose = require("mongoose");

// Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// create person model
const Person = mongoose.model("person", personSchema);
module.exports = Person;

// post request data
// {
//   "name": "aman kanaujia",
//   "age": 24,
//   "work": "manager",
//   "mobile": 1234567890,
//   "email": "amankanaujia777@gmail.com",
//   "address": "lucknow",
//   "salary": 12000000
// }
