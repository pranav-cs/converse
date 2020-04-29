import React, { Component, createRef } from 'react'

class MessageInput extends Component {
  constructor(props) {
    super(props)
    this.message_ref = createRef()
  }

  send() {

  }

  render() {
    return (
      <div id='MessageInput' className='container is-fluid'>
        <div className="field has-addons">
          <div id='input-control' className="control is-large has-icons-left">
            <input className="input is-medium" type="text" placeholder="Type Away!" />
            <span className="icon is-small is-left">
              <i className="fas fa-pencil-alt"></i>
            </span>
          </div>
          <div id='button-control' className="control is-large">
            <a className="button is-medium is-info"><i className="fas fa-paper-plane"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageInput