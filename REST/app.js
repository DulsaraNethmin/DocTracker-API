require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const chat=require('./controllers/chatcontroller');
const http=require('http').createServer(app);


const {sequelize} = require('./models');
const { Server } = require('http');
var corsOptions = {
  origin: "http://localhost:8080",
    credentials: true,
    optionSuccessStatus: 200

};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

app.get("/", (req, res) => {
  res.send("Welcome to DocTracker Api");
});
const io=new Server(Server,{
  cors:{
    origin:'http://localhost:3000/',
    method:["GET","POST"],
  },
});
io.on("connection",(socket)=>{
  console.log(socket.id);
  socket.on("disconnect",()=>{
    console.log("server is in offline mode");
  })

})

const PORT = process.env.PORT || 8080;
app.listen(8080,async() => {
  console.log(`Server is running on port ${PORT}.`);
  await sequelize.authenticate();
  console.log("DB connencted");
});

