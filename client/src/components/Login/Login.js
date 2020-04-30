import React, { createRef } from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { useStoreState, useStoreActions } from 'easy-peasy'

function Login() {
  let username_ref = createRef()

  const is_logged_in = useStoreState(state => state.people.me.is_logged_in)
  const login = useStoreActions(actions => actions.people.login)

  if (is_logged_in) {
    return <Redirect to='/home' />
  }

  return (
    <div className="columns is-mobile is-centered">
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
              ref={username_ref} autoFocus />
          </div>

          <div className="control">
            <button
              className="button is-info is-rounded is-large"
              onClick={async () => {
                if (!username_ref || !username_ref.current) {
                  return
                }

                const name = username_ref.current.value

                if (name) {
                  let colors = ['#f7b668', '#36a9a6', '#cdff75', '#ff96f0']
                  let color = colors[Math.floor(Math.random() * colors.length)]

                  let photo = await fetch('https://picsum.photos/48')
                  let photoURL = photo.url

                  if (username_ref.current) {
                    username_ref.current.value = ''
                  }

                  login({ name, color, photoURL })
                }
              }}>Go</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default withRouter(Login)
