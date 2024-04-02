const mongoose = require("mongoose");

// Schema
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

// create person model
const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;

// post request data
// {
//   "name": "lassi",
//   "price": 24,
//   "taste": "sweet",
//   "is_drink": true,
//   "ingredients": "milk sugar",
//   "num_sales": 50
// }
