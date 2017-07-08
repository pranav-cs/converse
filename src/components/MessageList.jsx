import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

const socket = io();

export class MessageList extends React.Component {
  constructor(props) {
    super(props);

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('welcomeMessage', (data) => {
      console.log('welcomeMessage');
      console.log(data);
    });

    socket.on('newArrival', (data) => {
      console.log('newArrival');
      console.log(data);
    });

    socket.on('memberLeft', (data) => {
      console.log('memberLeft');
      console.log(data);
    });

    socket.on('updateUserList', (users) => {
      console.log('updateUserList');
      console.log(users);
    });

    socket.on('newMessage', (data) => {
      console.log('newMessage');
      console.log(data);
    });
  }

  onSend(e) {
    e.preventDefault();

    socket.emit('messageFromUser', {
      from: 'client',
      text: this.refs.message.value,
      room: this.refs.room.value,
      time: new Date().getTime()
    }, () => {
      console.log('Sent succesfully!');
    });
  }

  onJoinRoom(e) {
    e.preventDefault();

    const data = {
      from: 'client',
      room: this.refs.room.value,
      time: new Date().getTime()
    };

    socket.emit('join room', data, (result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <div>
        <h1>Converse</h1>
        <input name="message" ref='message' type="text" placeholder="Message" autoFocus />
        <button onClick={this.onSend.bind(this)}>Send</button>
        <input name="room" ref='room' type="text" placeholder='Room name' autoFocus />
        <button onClick={this.onJoinRoom.bind(this)}>Join Room</button>
      </div>
    );
  }
}

export default connect()(MessageList);
