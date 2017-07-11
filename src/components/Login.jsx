import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { startEnterRoom } from 'actions';

export const socket = io();

export class Login extends React.Component {
  constructor(props) {
    super(props);

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('updateRoomsList', (users) => {
      console.log('updateRoomsList');
      console.log(users);
    });
  }

  onJoinRoom(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      name: this.refs.name.value,
      room: this.refs.room.value
    };

    socket.emit('join room', data, (result) => {
      console.log('client - join room');
      console.log(result);
      if (result) {
        dispatch(startEnterRoom(data.name, data.room));
      }
    });
  }

  render() {
    return (
      <div id='start'>
        <div id='header'>
          <p>Converse</p>
        </div>
        <div id='form'>
          <input name="name" ref='name' type="text" placeholder='Enter your name' autoFocus />
          <input name="room" ref='room' type="text" placeholder='Enter room name' autoFocus />
          <button onClick={this.onJoinRoom.bind(this)}>Join Room</button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
