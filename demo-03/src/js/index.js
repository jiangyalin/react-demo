import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import Routes from './routes';

const rootEl = document.getElementById('app');
import { Cs } from './components';
import { Appb } from './containers';

// class Counter extends Component {
//   render() {
//     const { value,  onIncreaseClick, onIncreaseClickB } = this.props;
//     return (
//       <div>
//         <span>{value}</span>
//         <button type="button" onClick={onIncreaseClick}>点击+1</button>
//         <button type="button" onClick={onIncreaseClickB}>点击-{}1</button>
//       </div>
//     )
//   }
// }

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   // b: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired,
//   // onIncreaseClickB: PropTypes.number.isRequired
// };

// const increaseAction = { type: 'increase' };
// const cutbackAction = { type: 'cutback'};

import { increaseAction, cutbackAction } from './actions/cs'

// const counter = ( state = { count: 0 }, action ) => {
//   const count = state.count;
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 };
//     case 'cutback':
//       return { count: count - 1 };
//     default:
//       return state;
//   }
// };
import { cs } from './reducers'

const store = createStore(cs);

// const mapStateToProps = (state) => {
//   return {
//     value: state.count
//   }
// };

// const mapB = () => {
//   return {
//     b: 555
//   }
// };

// const mapDispatchTo = () => {
//   return {
//     onIncreaseClick: () => store.dispatch(increaseAction),
//     onIncreaseClickB: () => store.dispatch(cutbackAction)
//   }
// };
//
// const App = connect(
//   mapStateToProps,
//   mapDispatchTo
// )(Appb);

render(
  <Provider store={store}>
    <Appb/>
  </Provider>,
  rootEl
);

// render(
//   <Routes history={browserHistory}/>,
//   rootEl
// );