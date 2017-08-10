import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import Routes from './routes';

const rootEl = document.getElementById('app');

class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={onIncreaseClick}>点击+1</button>
        <button type="button" onClick={onIncreaseClick}></button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
};

const increaseAction = { type: 'increase' };

const counter = ( state = { count: 0 }, action ) => {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state;
  }
};

const store = createStore(counter);

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);

render(
  <Routes history={browserHistory}/>,
  rootEl
);