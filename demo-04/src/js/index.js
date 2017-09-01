import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux'

import { App } from './containers';
import reducer from './reducers'

const rootEl = document.getElementById('app');
const store = createStore(reducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);