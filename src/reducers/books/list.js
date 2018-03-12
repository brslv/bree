import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  BOOK_ADDED,
  BOOK_DELETED,
  CLEAR_BOOKS
} from '../../actions/books/list'

const defaultState = null

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS: return defaultState
    case RECEIVE_BOOKS: {
      return action.payload.books.reverse()
    }
    case BOOK_ADDED: {
      return [...(state || []), action.payload] 
    }
    case BOOK_DELETED: {
      if (state) {
        return state.filter(book => book._id !== action.payload)
      }

      return state
    }
    case CLEAR_BOOKS: return defaultState
    default: return state
  }
}