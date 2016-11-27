var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port:8080});

wss.on("connection", function(ws) {
    ws.send("Welcome to Cyberchat");
    
});