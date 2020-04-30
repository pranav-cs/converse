import React from 'react'
import { useStoreState } from 'easy-peasy'
import Message from '../Message/Message'

function MessageList({ room }) {
  const messages = useStoreState(state => state.messages.messages[room]) || []

  if (messages.length === 0) {
    return (
      <div id='no-messages'>
        <h1 className='is-size-2 has-text-warning has-text-centered'>Wow! Such emptiness</h1>
      </div>
    )
  }

  return (
    <div id='MessageList'>
      {messages.map(({ name, message }, index) => (
        <Message
          key={index}
          name={name}
          message={message} />
      ))}
    </div>
  )
}

export default MessageList