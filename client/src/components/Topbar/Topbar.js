import React, { createRef } from 'react'
import { withRouter } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'

function Topbar() {
  let burger = createRef()
  let burger_menu = createRef()

  const logout = useStoreActions(actions => actions.profile.logout)

  return (
    <nav id='topbar' className='navbar' role='navigation'>
      <div className='navbar-brand'>
        <span id='logo' className='fas fa-paw'></span>
        <h1 className='is-size-3'>{process.env.REACT_APP_NAME}</h1>

        <button
          className='navbar-burger burger'
          ref={burger}
          onClick={() => {
            burger.current.classList.toggle('is-active')
            burger_menu.current.classList.toggle('is-active')
          }}>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>

      <div className="navbar-menu" ref={burger_menu}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <button
                id='logout-btn'
                className='button is-primary'
                onClick={() => logout()}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout</button>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default withRouter(Topbar)