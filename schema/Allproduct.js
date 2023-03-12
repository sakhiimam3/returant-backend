const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Product", productSchema);
