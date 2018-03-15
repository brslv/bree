import { combineReducers } from 'redux'
import listReducer from './list'
import currentlyEditingReducer from './currentlyEditing'
import editModalVisibilityReducer from './editModalVisibility'

export default combineReducers({
  list: listReducer,
  currentlyEditing: currentlyEditingReducer,
  editModalVisibility: editModalVisibilityReducer,
})