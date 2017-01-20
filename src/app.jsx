import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'font-awesome/scss/font-awesome.scss';
import './scss/style.scss';

import router from 'router';
var store = require('store').configure();

console.log('Boilerplate ready to go!');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
