import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom"

import Login from '../Login/Login'
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <div id="App" >
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)