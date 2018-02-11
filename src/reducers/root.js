import { combineReducers } from 'redux'
import userReducer from './user'
import booksReducer from './books'

const reducer = combineReducers({
  user: userReducer,
  books: booksReducer
})

export default reducer
