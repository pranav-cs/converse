const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const { Server } = require('http');

const app = express();
const server = Server(app);
const io = socketIO(server);

const { generateMessage } = require('./utils/message');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('messageFromServer', generateMessage('server', 'Hey, welcome to converse'));
  socket.broadcast.emit('messageFromServer', generateMessage('server', 'A new user has joined us'));

  // socket.on('messageFromUser', (data) => {
  //   console.log('server - messageFromUser');
  //   console.log(data);
  // });
  //
  // socket.on('toAllMessageFromUser', (data) => {
  //   console.log('server - toAllMessageFromUser');
  //   console.log(data);
  //   io.emit('messageFromServer', data);
  // });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    socket.broadcast.emit('messageFromServer', generateMessage('server', 'User has left'));
  });
});

// change https to http req.headers[] doesn't exist locally
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//Default 404 page
app.use((req, res) => {
    res.type('text/html');
    res.status(404);
    res.send('404 - Not Found');
});

// Default 500 Error page
app.use((err, req, res) => {
    console.error(err.stack);
    res.type('text/html');
    res.status(500);
    res.send('500 - Server Error');
});

server.listen(PORT, () => {
  console.log(`Successfully connected with express on ${PORT}`);
});
