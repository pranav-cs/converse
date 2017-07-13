import React from 'react';

export default class Message extends React.Component {
  render() {
    const { message, name } = this.props;

    return (
      <div className='message'>
        <p className='name'>{name}</p>
        <p className='msg'>{message}</p>
      </div>
    );
  }
}
