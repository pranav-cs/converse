import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {Main} from 'Main';
import {MessageList} from 'MessageList';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={MessageList}/>
    </Route>
  </Router>
);
