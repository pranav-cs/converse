const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

// Create our app
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

const PORT = process.env.PORT || 3000;

// change https to http req.headers[] doesn't exist locally
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New user connected');
});

//Default 404 page
app.use((req, res) => {
    res.type('text/html');
    res.status(404);
    res.send('404 - Not Found');
});

// Default 500 Error page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/html');
    res.status(500);
    res.send('500 - Server Error');
});

server.listen(PORT, () => {
  console.log(`Successfully Connected with express on ${PORT}`);
});
