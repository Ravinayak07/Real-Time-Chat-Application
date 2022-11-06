//import express
const express = require("express");
const app = express(); //calling express

//http module
const http = require("http").createServer(app); //createrServer is a method on https module. Inside which we pass the variable which calls the express.

const PORT = process.env.PORT || 3000; //for port this means that after deployement if the PORT is not available , then 3000 will be the port

//listening the port
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//using express middleware so that we include the files inside the public folder. For ex: node js doesnot know that
//the stylesheet is included in the public folder
//here we are using static feature of middleware.
//all the static files are included inside the public folder
app.use(express.static(__dirname + "/public"));

//creating a route   "/" :  homepage
app.get("/", (req, res) => {
  //sending the path of index file
  res.sendFile(__dirname + "/index.html");
});

// Socket
//importing socket.io
const io = require("socket.io")(http); //its a function, we need to pass the server(http) on whichwe are runing our app inside it

//Now here when the client connects to browser, the function callback in the second parameter gets called. The call back
//fun takes the socket as the parameter
io.on("connection", (socket) => {
  console.log("Connected...");

  //sending message from client to server
  socket.on("message", (msg) => {
    //bradcast means it sends message to every socket except the one which has sent the message
    socket.broadcast.emit("message", msg);
    console.log(msg);
  });
});
