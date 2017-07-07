import React from 'react';
import { connect } from 'react-redux';

const io = require('socket.io-client');

const socket = io();

export class MessageList extends React.Component {
  componentDidMount() {
    console.log('hello');
    socket.on('connect', () => {
      console.log('Connected client');
    });
  }
  render() {
    return (
      <div>
        <h1 className='title-component'>Converse</h1>
      </div>
    );
  }
}

export default connect()(MessageList);
