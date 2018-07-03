const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// DB Config

//const db = require("./config/keys").mongoURI;
const db = process.env.mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connect"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Helllllo");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
