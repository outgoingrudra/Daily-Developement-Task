const express = require("express");
const http = require("http");
const { Server } = require("socket.io");  // CHANGE THIS: 'socket.io', not 'tls'!

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const path = __dirname;

io.on("connection", (socket) => {
    console.log("Connected to server !!🫂");

    socket.on("disconnect", () => {
        console.log("Disconnected from Server 😒");
    });
});

app.get("/", (req, res) => res.sendFile(path + "/index.html"));

// FIX: Use server.listen, not app.listen!
server.listen(3000, () => {
    console.log("Server running on port 3000");
});