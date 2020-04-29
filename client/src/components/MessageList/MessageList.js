import React, { Component } from 'react'
import Message from '../Message/Message'

class MessageList extends Component {
  render() {
    let index = 0

    return (
      <div id='MessageList'>
        {this.props.data.map(data => <Message key={index++} name={data.name} message={data.message} />)}
      </div>
    )
  }
}

export default MessageList