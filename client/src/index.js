import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import '../node_modules/bulma/css/bulma.css'
import './styles/style.scss'

import App from './components/App/App'
import store from './store/store'
import setup_socket_event_handlers from './event_handlers'

setup_socket_event_handlers(store)

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
