import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import Topbar from '../Topbar/Topbar'
import Main from '../Main/Main'

class Home extends Component {
  render() {
    if (!this.props.is_logged_in) {
      return <Redirect to='/' />
    }

    return (
      <div id='Home' className="container is-fluid">
        <Topbar />
        <Main />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    is_logged_in: state.auth.is_logged_in
  }
}

export default connect(mapStateToProps, null)(withRouter(Home))
