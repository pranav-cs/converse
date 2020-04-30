import React from 'react'
import { useStoreState } from 'easy-peasy'

import Message from '../Message/Message'

function MessageList({ room }) {
  const messages = useStoreState(state => state.messages[room]) || []

  return (
    <div id='MessageList'>
      {messages.map(({ name, message }, index) => <Message key={index} name={name} message={message} />)}
    </div>
  )
}

export default MessageList