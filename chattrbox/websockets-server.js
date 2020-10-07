var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer(
    {"port": port}
);

messages = [];

console.log('WebSockets Server Started');

ws.on('connection', function(socket){
    console.log('client connection established');

    messages.forEach(function(msg){
        socket.send(msg);
    });

    socket.on('message', function(data){
        console.log('message recived: '+data);
        messages.push(data);
        
        ws.clients.forEach(function(clientSocket){
            clientSocket.send(data);
        });

    });
});