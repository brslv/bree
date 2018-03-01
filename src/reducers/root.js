import { combineReducers } from 'redux'
import isLoadingReducer from './isLoading'
import userReducer from './user'
import booksReducer from './books'
import bookToEditReducer from './bookToEdit'
import notificationsReducer from './notifications'

const reducer = combineReducers({
  isLoading: isLoadingReducer,
  user: userReducer,
  books: booksReducer,
  bookToEdit: bookToEditReducer,
  notifications: notificationsReducer
})

export default reducer
