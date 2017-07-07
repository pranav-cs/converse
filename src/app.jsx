import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configure } from 'store';
import router from 'router';
import 'font-awesome/scss/font-awesome.scss';
import './scss/style.scss';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
