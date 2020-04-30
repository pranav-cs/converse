import React from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { useStoreState } from 'easy-peasy'

import Topbar from '../Topbar/Topbar'
import Main from '../Main/Main'

function Home() {
  const is_logged_in = useStoreState(state => state.people.me.is_logged_in)

  if (!is_logged_in) {
    return <Redirect to='/' />
  }

  return (
    <div id='Home' className="container is-fluid">
      <Topbar />
      <Main />
    </div>
  )
}

export default withRouter(Home)