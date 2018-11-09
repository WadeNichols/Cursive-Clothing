const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 9090;
const app = express()

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({ secret: process.env.SECRET }));

mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb://localhost:27017/ccc-site",
  { useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    console.log("connected to the database");
  }
);

app.use("/auth", require("./routes/auth"));
app.use("/api/cart", require("./routes/cart"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`)
});
