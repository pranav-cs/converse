import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import { startLeaveRoom, newMessage, updateUserList } from 'actions';

import { socket } from 'Login';

export class Textbar extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch, name, room } = this.props;

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      dispatch(startLeaveRoom());
      console.log('Disconnected from server');
    });

    socket.on('welcomeMessage', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('newArrival', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('memberLeft', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('newMessage', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });
  }

  componentDidMount() {
    $('#message-input').keypress((e) => {
      if (e.which === 13) {
        this.onSend();
      }
    });
  }

  onSend() {
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
      document.getElementById('message-input').focus();
    });
  }

  render() {
    return (
      <div id='textbar'>
        <input id="message-input" name="message" ref='message' type="text" placeholder="Type message here" autoFocus />
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
