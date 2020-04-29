import React, { Component } from 'react'
import Topbar from '../Topbar/Topbar'
import Main from '../Main/Main'

class Home extends Component {
  render() {
    return (
      <div id='Home' className="container is-fluid">
        <Topbar />
        <Main />
      </div>
    )
  }
}

export default Home