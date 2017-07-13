import React from 'react';

export default class Message extends React.Component {
  render() {
    const { message, name, room } = this.props;

    return (
      <div id='message'>
        <p id='name'>{name}</p>
        <p id='msg'>{message}</p>
      </div>
    );
  }
}
