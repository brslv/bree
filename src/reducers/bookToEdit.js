import {
  REQUEST_BOOK_TO_EDIT,
  RECEIVE_BOOK_TO_EDIT,
} from '../actions/bookToEdit'

export default (state = null, action) => {
  switch (action.type) {
    case REQUEST_BOOK_TO_EDIT: return null
    case RECEIVE_BOOK_TO_EDIT: return action.payload
    default: return state
  }
}
