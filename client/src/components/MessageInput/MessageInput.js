import React, { Component, createRef } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { add_message } from '../../store/action_creators/action_creators'

class MessageInput extends Component {
  constructor(props) {
    super(props)
    this.text_ref = createRef()
  }

  handle_send() {
    const text = this.text_ref.current.value
    const { name, current_room: room } = this.props

    this.text_ref.current.value = ''
    this.text_ref.current.focus()

    this.props.socket.emit('add_message', { room, name, text })
  }

  render() {
    return (
      <div id='MessageInput' className='container is-fluid' >
        <div className='field has-addons'>

          <div id='input-control' className='control is-large has-icons-left'>
            <input
              className='input is-medium'
              type='text'
              placeholder='Type Away!'
              ref={this.text_ref} autoFocus />

            <span className='icon is-small is-left'>
              <i className='fas fa-pencil-alt'></i>
            </span>
          </div>

          <div id='button-control' className='control is-large'>
            { /* eslint-disable-next-line */}
            <a
              className='button is-medium is-info'
              onClick={() => this.handle_send()}><i className='fas fa-paper-plane'></i></a>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    name: state.me.name,
    current_room: state.me.current_room
  }
}

const mapDispatchToProps = { add_message }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageInput))