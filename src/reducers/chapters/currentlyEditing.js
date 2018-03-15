import {
  REQUEST_CHAPTER_TO_EDIT,
  RECEIVE_CHAPTER_TO_EDIT
} from '../../actions/chapters/currentlyEditing'

const defaultState = null

export default (state = defaultState, action) => {
  switch(action.type) {
    case REQUEST_CHAPTER_TO_EDIT: {
      return null
    }
    case RECEIVE_CHAPTER_TO_EDIT: {
      return action.payload
    }
    default: return state
  }
}