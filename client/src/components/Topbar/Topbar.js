import React, { Component, createRef } from 'react'
import { withRouter } from 'react-router-dom'

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.burger = createRef()
    this.burger_menu = createRef()
  }

  componentDidMount() {
    this.burger.current.addEventListener('click', () => {
      this.burger.current.classList.toggle('is-active')
      this.burger_menu.current.classList.toggle('is-active')
    })
  }

  render() {
    return (
      <nav id='topbar' className='navbar' role='navigation'>
        <div className='navbar-brand'>
          <span id='logo' className='fas fa-paw'></span>
          <h1 className='is-size-3'>{process.env.REACT_APP_NAME}</h1>

          <button className='navbar-burger burger' ref={this.burger}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        <div className="navbar-menu" ref={this.burger_menu}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <button id='logout-btn' className='button is-primary'>Logout</button>
              </div>
            </div>
          </div>
        </div>

      </nav>
    )
  }
}

export default withRouter(Topbar)