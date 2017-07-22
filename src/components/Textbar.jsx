import React from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

import { socket } from 'Container';

import { newMessage } from 'actions';

export class Textbar extends React.Component {
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
