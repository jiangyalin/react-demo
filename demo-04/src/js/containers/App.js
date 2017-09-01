import React from 'react';
import { connect } from 'react-redux'
// import { addTodo } from '../actions/cs'

class App extends React.Component {
  render() {
    let input;
    const store = this.props;
    return (
      <div>
        <input type="text"/>
        <button type="button" onClick={e => {
          // store.dispatch(addTodo('k'));
          console.log('store',this.props)
        }}>提交</button>
        {
          store.store.cs.map(value =>
            <p key='0'>{store.store.cs[0].text}</p>
          )}
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