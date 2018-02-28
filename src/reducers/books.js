import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  BOOK_ADDED
} from '../actions/books'

export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_BOOKS: return []
    case RECEIVE_BOOKS: return action.payload.books.reverse()
    case BOOK_ADDED: return [...state, action.payload]
    default: return state
  }
}
