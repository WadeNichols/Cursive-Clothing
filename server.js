const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 5050;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({ secret: process.env.SECRET }));

mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://localhost:27017/ccc-site", 
    { useNewUrlParser:true },
    (err) => {
        if (err) throw err;
        console.log("connected to the database");
    });

require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/cart", require("./routes/cart"));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => console.log(`Connected to MongoDB`))
app.listen(process.env.PORT, () => console.log(`[+] Starting server on port ${process.env.PORT}`))