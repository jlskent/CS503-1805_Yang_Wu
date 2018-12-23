import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import React from 'react';
import logo from './logo.png';
import NewsPanel from '../NewsPanel/NewsPanel';

import 'materialize-css/dist/js/materialize.js';




class App extends React.Component {
  render() {
    return (
      <div>
        <img className='logo' src={logo} alt='logo' />
        <div className='container'>
          <NewsPanel />
        </div>
      </div>
    );
  }
}

// note: do not require {} for imports if we have default keyword
export default App;