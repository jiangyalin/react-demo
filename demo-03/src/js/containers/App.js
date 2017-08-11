import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux'
import { increaseAction, cutbackAction } from '../actions/cs'

class Appb extends React.Component {
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

Appb.propTypes = {
  value: PropTypes.number.isRequired,
  // b: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onIncreaseClickB: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
};

const mapDispatchTo = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onIncreaseClickB: () => dispatch(cutbackAction)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchTo
)(Appb);