const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  itemType: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  partNumber: {
    type: Number,
    required: true
  },
  fieldname: {
    type: String,
    required: true
  },
  link: String
});

module.exports = mongoose.model("Item", itemSchema);
