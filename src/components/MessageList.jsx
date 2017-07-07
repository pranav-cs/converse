import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

const socket = io();

export class MessageList extends React.Component {
  constructor(props) {
    super(props);

    socket.on('connect', function () {
      console.log('Connected to server');

      socket.emit('messageFromUser', {
        text: 'yo, this is client'
      })
    });

    socket.on('disconnect', function () {
      console.log('Disconnected from server');
    });

    socket.on('messageFromServer', function (data) {
      console.log('New messageFromServer');
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <h1>Converse</h1>
      </div>
    );
  }
}

export default connect()(MessageList);
