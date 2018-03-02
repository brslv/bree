import { combineReducers } from 'redux'
import isLoadingReducer from './isLoading'
import userReducer from './user'
import booksReducer from './books'
import bookToEditReducer from './bookToEdit'
import bookToWriteReducer from './bookToWrite'
import notificationsReducer from './notifications'
import confirmationReducer from './confirmation'

const reducer = combineReducers({
  isLoading: isLoadingReducer,
  user: userReducer,
  books: booksReducer,
  bookToEdit: bookToEditReducer,
  bookToWrite: bookToWriteReducer,
  notifications: notificationsReducer,
  confirmation: confirmationReducer
})

export default reducer
