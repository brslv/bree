import { combineReducers } from 'redux'
import listReducer from './list'
import currentlyEditingReducer from './currentlyEditing'
import currentlyWritingReducer from './currentlyWriting'

export default combineReducers({
  list: listReducer,
  currentlyEditing: currentlyEditingReducer,
  currentlyWriting: currentlyWritingReducer
})