const express = require("express");
const cors = require("cors");
const app = express();
const {sequelize} = require('./models');
var corsOptions = {
  origin: "http://localhost:8081"
};
require('dotenv').config();
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

app.get("/", (req, res) => {
  res.send("Welcome to DocTracker Api");
});


const PORT = process.env.PORT || 8080;
app.listen(8080,async() => {
  console.log(`Server is running on port ${PORT}.`);
  await sequelize.authenticate();
  console.log("DB connencted");
});