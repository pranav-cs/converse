import React, { Component, createRef } from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.username_ref = createRef()
  }

  handle_login() {
    const name = this.username_ref.current.value

    if (this.props.socket.disconnected) {
      console.log('refresh page to reconnect to server')
    }

    this.props.socket.emit('join', { name })
    this.username_ref.current.value = ''
  }

  render() {
    if (this.props.is_logged_in) {
      return <Redirect to='/home' />
    }

    return (
      <div className="columns is-mobile is-centered" >
        <div id='Login' className="column is-full-mobile is-half-tablet is-two-thirds-desktop">

          <div id='title'>
            <span id='logo' className="fas fa-paw"></span>
            <h1 className="is-size-1">{process.env.REACT_APP_NAME}</h1>
          </div>

          <div className="field has-addons">
            <div className="control">
              <input
                className="input is-rounded is-large"
                type="text"
                placeholder="Enter a nickname"
                ref={this.username_ref} autoFocus />
            </div>

            <div className="control">
              <button
                className="button is-info is-rounded is-large"
                onClick={() => this.handle_login()}>Go</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    is_logged_in: state.auth.is_logged_in
  }
}

export default connect(mapStateToProps, null)(withRouter(Login))
