import { combineReducers } from 'redux'
import isLoadingReducer from './isLoading'
import userReducer from './user'
import booksReducer from './books'
import chaptersReducer from './chapters'
import notificationsReducer from './notifications'
import confirmationReducer from './confirmation'

const reducer = combineReducers({
  isLoading: isLoadingReducer,
  user: userReducer,
  books: booksReducer,
  chapters: chaptersReducer,
  notifications: notificationsReducer,
  confirmation: confirmationReducer
})

export default reducer
