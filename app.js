const express = require("express");
const cors = require("cors");
const app = express();
const {sequelize} = require('./models');
var corsOptions = {
  origin: "http://localhost:8080"
};


//routers


 // Use this after the variable declaration


require('dotenv').config();
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

app.get("/", (req, res) => {
  res.send("Welcome to DocTracker Api");
});
//middleware
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
  "Access-Control-Allow-Methods",
  "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
  );
  if (req.method === "OPTIONS") {
  return res.status(200).end();
  }
  next();
  });
//router for addDocument
const router=require('./routes/documentRouter')
try{
app.use('/api/document',router)
}catch{
  (e)=>{
    res.json(e);
  }
}
//router to get all Documents



const PORT = process.env.PORT || 8080;
app.listen(8080, async() => {
  console.log(`Server is running on port ${PORT}.`);
  await sequelize.authenticate();
  console.log("DB connencted");
});