const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const { Server } = require('http');

const { generateMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');
const { Users } = require('./models/users');

const app = express();
const server = Server(app);
const io = socketIO(server);

const users = new Users();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('messageFromUser', (data, callback) => {
    console.log('server - messageFromUser');
    console.log(data);
    const user = users.getUser(socket.id);

    if (user && isRealString(data.message)) {
      io.to(user.room).emit('newMessage', generateMessage(user.name, data.message));
    }

    callback();
  });

  socket.on('join room', (data, callback) => {
    if (!isRealString(data.name) || !isRealString(data.room)) {
      return callback(false); // 'From name and room name are required.'
    }

    socket.join(data.room);
    // remove from any old room
    users.removeUser(socket.id);
    // add to new room
    users.addUser(socket.id, data.name, data.room);

    io.to(data.room).emit('updateUserList', users.getUserList(data.room));

    socket.emit('welcomeMessage', generateMessage('server', 'Hey, welcome to converse'));
    socket.broadcast.to(data.room).emit('newArrival', generateMessage('server', `${data.name} has joined.`));

    callback(true); //'Joined succesfully!'
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    const user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('memberLeft', generateMessage('server', `${user.name} has left.`));
    }
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
