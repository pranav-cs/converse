import React from 'react'
import { withRouter } from 'react-router-dom'

import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'

function MessageBox() {
  return (
    <div id='MessageBox'>
      <MessageList />
      <MessageInput />
    </div>
  )
}

export default withRouter(MessageBox)
