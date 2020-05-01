import React, { Component, createRef } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.burger = createRef()
    this.burger_menu = createRef()
  }

  handle_logout() {
    this.props.socket.emit('disconnect')
  }

  render() {
    return (
      <nav id='topbar' className='navbar' role='navigation' >
        <div className='navbar-brand'>
          <span id='logo' className='fas fa-paw'></span>
          <h1 className='is-size-3'>{process.env.REACT_APP_NAME}</h1>

          <button
            className='navbar-burger burger'
            ref={this.burger}
            onClick={() => {
              this.burger.current.classList.toggle('is-active')
              this.burger_menu.current.classList.toggle('is-active')
            }}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        <div className="navbar-menu" ref={this.burger_menu}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <button
                  id='logout-btn'
                  className='button is-primary'
                  onClick={() => this.handle_logout()}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket
  }
}

export default connect(mapStateToProps, null)(withRouter(Topbar))
