import React from 'react';

export default class Message extends React.Component {
  render() {
    const { message, name, room } = this.props;

    return (
      <div id='message'>
        <p>Message {message}</p>
        <p>Name {name}</p>
        <p>Room {room}</p>
      </div>
    );
  }
}
