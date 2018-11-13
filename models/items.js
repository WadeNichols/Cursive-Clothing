const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    quantity: Number,
    available: Boolean,
    link: String
});

module.exports = mongoose.model("Item", itemSchema)
