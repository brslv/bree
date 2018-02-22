import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/root'
import { userDataStoreKey } from './.data'

const initialState = {
  user: localStorage.getItem(userDataStoreKey)
    ? JSON.parse(localStorage.getItem(userDataStoreKey))
    : null
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
