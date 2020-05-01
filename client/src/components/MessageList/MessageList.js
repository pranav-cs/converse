import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Message from '../Message/Message'

class MessageList extends Component {
  render() {
    if (this.props.messages.length === 0) {
      return (
        <div id='no-messages'>
          <h1 className='is-size-2 has-text-warning has-text-centered'>Wow! Such emptiness</h1>
        </div>
      )
    }

    return (
      <div id='MessageList'>
        {this.props.messages.map(({ name, text }, index) => {
          const { color, photoURL } = this.props.people[name]

          return (
            <Message
              key={index}
              name={name}
              text={text}
              color={color}
              photoURL={photoURL} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages[state.me.current_room],
    people: state.people
  }
}

export default connect(mapStateToProps, null)(withRouter(MessageList))