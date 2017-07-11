import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Container from 'Container';
import Login from 'Login';
import Room from 'Room';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Login} />
      <Route path='room' component={Room} />
    </Route>
  </Router>
);
