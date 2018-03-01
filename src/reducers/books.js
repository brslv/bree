import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  BOOK_ADDED,
  BOOK_DELETED
} from '../actions/books'

export default (state = null, action) => {
  switch (action.type) {
    case REQUEST_BOOKS: return null
    case RECEIVE_BOOKS: return action.payload.books.reverse()
    case BOOK_ADDED: return [...(state || []), action.payload]
    case BOOK_DELETED: {
      if (state) {
        return state.filter(book => book._id !== action.payload)
      }

      return state
    }
    default: return state
  }
}
