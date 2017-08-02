const React = require('react');
const QuestionApp = require('./components/QuestionApp');

let mainCom = React.render(
  <QuestionApp/>,
  document.getElementsById('app')
);