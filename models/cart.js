const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
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
    link: String
})

module.exports = mongoose.model('Cart', cartSchema)