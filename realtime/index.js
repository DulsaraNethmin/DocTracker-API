const express = require('express');
const http = require('http');
const cors = require('cors');
const port=process.env.PORT || 8000;
const app=express();
const server=http.createServer(app)
const io=require('socket.io')(server,{
    cors:{
        origin:"*",
    }
});

//middleware

app.use(express.json);
//app.use(cors());


//http.get('/',(req,res)=>res.send("hi"))


io.on("connection",(socket)=>{
    console.log("connected");
    socket.on("/test",(msg)=>{console.log(msg)});
});


server.listen(port,"0.0.0.0",()=>{
    console.log("server started on: "+port);
})