const environment = require('./environment/environment');
const express = require('express');
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const bodyParser = require('body-parser');
const routes = require('./api/routes/messages-routes');


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

io.on('connection', function (client) {
    console.log('Client connected...');

    client.on('message-sent', function () {
        console.log('Message received');
        setTimeout(() => {
            client.broadcast.emit('update-message-list')
            client.emit('update-message-list');
        }, 1000);
    });
});

server.listen(environment.port);
console.log('RESTful API server started on: ' + environment.port);
