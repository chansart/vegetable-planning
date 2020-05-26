import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import { vegetables } from './assets/vegetables';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import { searchVegetables } from './reducers';

const logger = createLogger();
const store = createStore(searchVegetables, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={ store }>
    	<App vegetables={ vegetables } />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
