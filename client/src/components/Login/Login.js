import React, { Component, createRef } from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import { login } from '../../store/action_creators/action_creators'

class Login extends Component {
  constructor(props) {
    super(props)
    this.username_ref = createRef()
  }

  async handle_login() {
    if (!this.username_ref || !this.username_ref.current) {
      return
    }

    const name = this.username_ref.current.value

    if (name) {
      let colors = ['#f7b668', '#36a9a6', '#cdff75', '#ff96f0']
      let color = colors[Math.floor(Math.random() * colors.length)]

      let photo = await fetch('https://picsum.photos/48')
      let photoURL = photo.url

      if (!this.username_ref && this.username_ref.current) {
        this.username_ref.current.value = ''
      }

      this.props.login(name, color, photoURL)
    }
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
                onClick={async () => await this.handle_login()}>Go</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    is_logged_in: state.auth.is_logged_in
  }
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
