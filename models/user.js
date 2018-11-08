const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    name:{
        first: String,
        last: String
    },
    address:{
        home: String,
        city: String,
        state: String,
        zipCode: Number
    }
});

module.exports = mongoose.model("User", userSchema);