import React from 'react';
import { connect } from 'react-redux'

import { demoAdd } from '../actions/demo';

class App extends React.Component {
  render() {
    const { store } = this.props;
    const dispatch = this.props.dispatch;
    const action = (type, value) => () => this.props.dispatch({type, value})
    const click = () => {
      console.log('k' + this.props.store.demo.text);
      dispatch({type: 'DEMO_ADD', text: 'k'})
    };
    return (
      <div>
        {store.demo.text}
        <button type="button" onClick={click}>点击</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    store: store
  }
};

App = connect(
  mapStateToProps
)(App);

export default App;