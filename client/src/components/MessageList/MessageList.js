import React, { Component } from 'react'
import Message from '../Message/Message'

class MessageList extends Component {
  render() {
    return (
      <div id='MessageList'>
        {this.props.messages.map((data, index) => <Message key={index} name={data.name} message={data.message} />)}
      </div>
    )
  }
}

export default MessageList