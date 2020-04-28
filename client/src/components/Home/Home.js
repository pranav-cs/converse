import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <nav id='topbar' className="navbar" role="navigation">
        <div className="navbar-brand">
          <span id='logo' className="fas fa-paw"></span>
          <h1 className="is-size-3">Pangolin</h1>

          <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button id='logout-btn' className="button is-primary">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Home)