import React from 'react';
import { connect } from 'react-redux';

import { startLeaveRoom, newMessage } from 'actions';

import { socket } from 'Login';

export class Textbar extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      dispatch(startLeaveRoom());
      console.log('Disconnected from server');
    });

    socket.on('welcomeMessage', (data) => {
      console.log('welcomeMessage');
      console.log(data);
    });

// TODO: redux a new arrival
    socket.on('newArrival', (data) => {
      console.log('newArrival');
      console.log(data);
    });

    // TODO: redux a left member
    socket.on('memberLeft', (data) => {
      console.log('memberLeft');
      console.log(data);
    });

    socket.on('updateUserList', (users) => {
      console.log('updateUserList');
      console.log(users);
    });
// TODO: redux a new message
    socket.on('newMessage', (data) => {
      dispatch(newMessage(data.message, data.name));
    });
  }

  onSend(e) {
    e.preventDefault();
    const message = this.refs.message.value;

    const { dispatch, name, room } = this.props;

    socket.emit('messageFromUser', {
      message,
      name,
      room
    }, () => {
      console.log('Sent succesfully!');
      dispatch(newMessage(message, name, room));
      this.refs.message.value = '';
    });
  }
  render() {
    return (
      <div id='textbar'>
        <input name="message" ref='message' type="text" placeholder="Type message here" autoFocus />
        <button onClick={this.onSend.bind(this)}>Go</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    name: state.name,
    room: state.room
  };
})(Textbar);
