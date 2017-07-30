import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Container from 'Container';
import Login from 'Login';
import Home from 'Home';

// import { checkIfLoggedIn } from 'actions';
//
// const requireLogin = (nextState, replace, next) => {
//   if (!checkIfLoggedIn()) {
//     replace('/');
//   }
//   next();
// };
 //
 // onEnter={requireLogin}

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Login} />
      <Route path='home' component={Home} />
    </Route>
  </Router>
);
