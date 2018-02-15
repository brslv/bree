import { combineReducers } from 'redux'
import isLoadingReducer from './isLoading'
import userReducer from './user'
import booksReducer from './books'
import notificationsReducer from './notifications'

const reducer = combineReducers({
  isLoading: isLoadingReducer,
  user: userReducer,
  books: booksReducer,
  notifications: notificationsReducer
})

export default reducer
