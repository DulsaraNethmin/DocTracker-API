const express = require('express');
const http = require('http');
const port=process.env.PORT || 8000;
const app=express();
const server=http.createServer(app)
const io=require('socket.io')(server)


app.use(express.json);

let branches={};
let users={};
io.on("connection",(socket)=>{
    console.log("connected");
    socket.on("signin",({id,branch_id})=>{
        console.log(id,branch_id);
        users[id]=socket;
        socket.join(branch_id)
        if(Object.keys(branches).includes(branch_id)){
            console.log('www');
            if(!(branches[`${branch_id}`].includes(id)))
            branches[`${branch_id}`].push(id); 
        }else{
            console.log('herer');
            branches[`${branch_id}`]=[id];
        }
        console.log(Object.keys(users));
        console.log(branches)
    });

    socket.on('msg',(msg)=>{
        console.log(msg);
        var targetId=msg.target;
        //console.log("target id is :"+ targetId);
        console.log(msg)
        if(users[targetId]){
            users[targetId].emit('msg',msg);
        }
    });

    socket.on('new_mail',(id)=>{
        console.log(`Mail Target is ${id}`);
        if(users[id]){
            users[id].emit('incoming_mail',"you have a Incoming mail.");
        }
    });

    socket.on('new_job',(branch_id)=>{
        console.log(`A new job. from branch ${branch_id}`);
        socket.to(branch_id).emit('new_job',"new job added");
    });

    socket.on('end',(user_id)=>{
        socket.disconnect();   
        delete users[user_id];
        console.log(Object.keys(users));
    });

    
});





server.listen(port,"0.0.0.0",()=>{
    console.log("server started on: "+port);
})

//app.listen(7000,()=>{console.log('normal server run...')})