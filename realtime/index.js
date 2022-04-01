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
app.use(cors());


io.on("Connection",()=>{
    console.log("connected")
});


server.listen(port,()=>{
    console.log("server started");
})