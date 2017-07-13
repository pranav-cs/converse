import React from 'react';

export default class Message extends React.Component {
  render() {
    const { message, name } = this.props;

    return (
      <div className='message'>
        <p className='msg'><span className='name'>{name}</span>{message}</p>
      </div>
    );
  }
}
