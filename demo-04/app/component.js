import React from 'react';
import style from './index.scss';
import './font.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <p className={style.box}> Yo, React </p>
        <i className="i-shoucang40 font-size-24 pr5"></i>
      </div>
    )
  }
}

export default App