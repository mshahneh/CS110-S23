const http = require('http');
const express = require('express')

const cors = require('cors');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket)=>{
    let room = undefined;
    let userName = undefined;
    console.log("user Connected")
    socket.on("disconnect", ()=>{
        console.log("user Disconnected")
    })
    socket.on("chat message", (data)=>{
        console.log("got the message", data)
        io.to(room).emit("chat message", data)
    })
    socket.on("join", (data) => {
        socket.join(data.room);
        room = data.room
        userName = data.username
        console.log(`user is joined to room ${data.room}`)
    })

    socket.emit("starting data", {"text":"hi"})

})


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

server.listen(3000, ()=>{console.log("listening on port 3000")});
