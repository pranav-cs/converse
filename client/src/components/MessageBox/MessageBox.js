import React from 'react'
import { useStoreState } from 'easy-peasy'
import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'

function MessageBox() {
  const current_room = useStoreState(state => state.profile.current_room)
  const messages = useStoreState(state => state.messages[current_room]) || []

  return (
    <div id='MessageBox'>
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  )
}

export default MessageBox