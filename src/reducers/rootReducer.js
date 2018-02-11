import { combineReducers } from 'redux'
import userReducer from './userReducer'
import booksReducer from './booksReducer'

const reducer = combineReducers({
  user: userReducer,
  books: booksReducer
})

export default reducer
