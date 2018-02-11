import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import userReducer from './reducers/userReducer'
import booksReducer from './reducers/booksReducer'

const reducer = combineReducers({
  user: userReducer,
  books: booksReducer
})
const middleware = applyMiddleware(
  thunk,
  createLogger()
)

const store = createStore(reducer, middleware)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
