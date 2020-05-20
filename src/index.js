import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { vegetables } from './assets/vegetables';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <App vegetables={ vegetables } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
