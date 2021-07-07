const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("Connection error", err);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
