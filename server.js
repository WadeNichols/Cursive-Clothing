const express = require('express');
const mongoose = require('mongoose')

require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/cart", require("./routes/cart"));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => console.log(`Connected to MongoDB`))
app.listen(process.env.PORT, () => console.log(`[+] Starting server on port ${process.env.PORT}`))