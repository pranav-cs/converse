import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Container from 'Container';
import MessageList from 'MessageList';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute path="home" component={MessageList} />
    </Route>
  </Router>
);
