import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom"
import Login from '../Login/Login'
import Home from '../Home/Home'

class App extends Component {
  componentDidMount() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Login />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)