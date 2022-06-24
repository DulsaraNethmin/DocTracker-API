require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

const {sequelize} = require('./models');
var corsOptions = {
  origin: "http://localhost:8080",
    credentials: true,
    optionSuccessStatus: 200

};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

require("dotenv").config()

const bodyParser = require("body-parser")

const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Welcome to DocTracker Api");
});

const PORT = process.env.PORT || 8080;
app.listen(8080,async() => {
  console.log(`Server is running on port ${PORT}.`);
  await sequelize.authenticate();
  console.log("DB connencted");
});