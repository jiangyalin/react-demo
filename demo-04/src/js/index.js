import "babel-polyfill"
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { App } from './containers';
import reducer from './reducers'
import rootSaga from './sagas'

const rootEl = document.getElementById('app');
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type});

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);