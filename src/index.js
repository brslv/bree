import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/root'
import { isLogged } from './utils/user'

const initialState = {
  user: isLogged() ? JSON.parse(localStorage.getItem('__userData')) : null
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(
    thunk,
    createLogger()
  )
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
