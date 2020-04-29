import React, { Component } from 'react'
import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'

class MessageBox extends Component {
  render() {
    const data = [
      {
        name: "John Smith",
        message: "Hello"
      },
      {
        name: "Trent",
        message: "Hi"
      }
    ]

    return (
      <div id='MessageBox'>
        <MessageList data={data} />
        <MessageInput />
      </div>
    )
  }
}

export default MessageBox