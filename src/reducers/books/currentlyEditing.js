import {
  REQUEST_BOOK_TO_EDIT,
  RECEIVE_BOOK_TO_EDIT,
} from '../../actions/books/currentlyEditing'

const defaultState = null

export default (state = defaultState, action) => {
  switch(action.type) {
    case REQUEST_BOOK_TO_EDIT: {
      return null
    }
    case RECEIVE_BOOK_TO_EDIT: {
      return action.payload
    }
    default: return state
  }
}