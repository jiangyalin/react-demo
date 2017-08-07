const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, hashHistory, IndexRoute } = require('react-router');

const QuestionApp = require('./containers/QuestionApp');
const QuestionHome = require('./containers/QuestionHome');

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">home</Link>
//         </li>
//         <li>
//           <Link to="/dome">dome</Link>
//         </li>
//       </ul>
//       <Route exact rath="/" component={QuestionHome}/>
//       <Route exact rath="/dome" component={QuestionApp}/>
//     </div>
//   </Router>
// );
//
const Home = React.createClass({
  render: function () {
    return (
      <div>
        <h2>home</h2>
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={QuestionHome}>
      <IndexRoute component = {QuestionHome} />
    </Route>
  </Router>,
  document.getElementById('app')
);