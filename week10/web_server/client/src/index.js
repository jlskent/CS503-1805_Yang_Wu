import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App/App';
// cache when slow connection
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router  } from 'react-router-dom';

import Base from './Base/Base';
// import LoginPage from './Login/LoginPage';
// import SignUpPage from './SignUp/SignUpPage';


// main
// root is located in public/index.html
ReactDOM.render(<Router><Base /></Router>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LoginPage />, document.getElementById('root'));
// ReactDOM.render(<SignUpPage />, document.getElementById('root'));
// ReactDOM.render(<Base />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
