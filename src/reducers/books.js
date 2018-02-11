import { REQUEST_BOOKS, RECEIVE_BOOKS } from '../actions/books'

export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_BOOKS: return []
    case RECEIVE_BOOKS: return action.payload.books
    default: return state
  }
}
