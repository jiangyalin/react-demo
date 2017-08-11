import React from 'react';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import { increaseAction, cutbackAction } from '../../actions/cs'
import { cs } from '../../reducers'

// const store = createStore(cs);

class Counter extends React.Component {
  render() {
    const { value,  onIncreaseClick, onIncreaseClickB } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={onIncreaseClick}>点击+1</button>
        <button type="button" onClick={onIncreaseClickB}>点击-{}1</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  // b: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onIncreaseClickB: PropTypes.func.isRequired
};

export default Counter