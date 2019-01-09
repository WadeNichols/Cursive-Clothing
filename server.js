const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8000;
const app = express();
const path = require("path")

const secret = process.env.SECRET || "Monkey Pen Friends Vape Doughboy Scotch"

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use(express.static(path.join(__dirname, "client", "build")))

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
app.use("/api/item", require("./routes/item"));



app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`)
});
