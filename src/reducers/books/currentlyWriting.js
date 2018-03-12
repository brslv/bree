import {
  REQUEST_BOOK_TO_WRITE,
  RECEIVE_BOOK_TO_WRITE,
} from '../../actions/books/currentlyWriting'

export default (state = null, action) => {
  switch(action.type) {
    case REQUEST_BOOK_TO_WRITE: {
      return null
    }
    case RECEIVE_BOOK_TO_WRITE: {
      return action.payload
    }
    default: return state
  }
}