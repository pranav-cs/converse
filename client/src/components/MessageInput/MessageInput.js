import React, { createRef } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

function MessageInput({ room }) {
  let message_ref = createRef()

  const name = useStoreState(state => state.profile.name)
  const push_message = useStoreActions(actions => actions.messages.push_message)

  return (
    <div id='MessageInput' className='container is-fluid'>
      <div className='field has-addons'>

        <div id='input-control' className='control is-large has-icons-left'>
          <input
            className='input is-medium'
            type='text'
            placeholder='Type Away!'
            ref={message_ref} />

          <span className='icon is-small is-left'>
            <i className='fas fa-pencil-alt'></i>
          </span>
        </div>

        <div id='button-control' className='control is-large'>
          <a
            className='button is-medium is-info'
            onClick={() => {
              const message = message_ref.current.value

              if (message != '') {
                push_message({ name, room, message })
                message_ref.current.value = ''
              }

            }}><i className='fas fa-paper-plane'></i></a>
        </div>

      </div>
    </div>
  )
}

export default MessageInput