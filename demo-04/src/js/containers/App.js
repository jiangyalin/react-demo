import React from 'react';
import { connect } from 'react-redux'

import { demoAdd } from '../actions/demo';

class App extends React.Component {
  click = () => {
    console.log('k' + this.props.store.demo.text);
    this.props.dispatch(demoAdd('k'))
  };
  render() {
    const { store } = this.props;
    return (
      <div>
        {store.demo.text}
        <button type="button" onClick={this.click}>点击</button>
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