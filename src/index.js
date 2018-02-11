import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/root'

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
