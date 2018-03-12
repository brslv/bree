import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  BOOK_ADDED,
  BOOK_DELETED,
  CLEAR_BOOKS
} from '../actions/books'
import {
  REQUEST_BOOK_TO_WRITE,
  RECEIVE_BOOK_TO_WRITE,
} from '../actions/bookToWrite'
import {
  REQUEST_BOOK_TO_EDIT,
  RECEIVE_BOOK_TO_EDIT,
} from '../actions/bookToEdit'

const defaultState = {
  list: null,
  bookToEdit: null,
  bookToWrite: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS: return defaultState
    case RECEIVE_BOOKS: {
      return Object.assign(
        {},
        state,
        { list: action.payload.books.reverse() }
      )
    }
    case BOOK_ADDED: {
      return Object.assign(
        {},
        state,
        { list: [...(state || []), action.payload] }
      )
    }
    case BOOK_DELETED: {
      if (state) {
        return Object.assign(
          {},
          state,
          { list: state.filter(book => book._id !== action.payload) }
        )
      }

      return state
    }
    case CLEAR_BOOKS: {
      return Object.assign(
        {},
        state,
        { list: defaultState.list }
      )
    }

    case REQUEST_BOOK_TO_WRITE: {
      return Object.assign(
        {},
        state,
        { bookToWrite: null }
      )
    }
    case RECEIVE_BOOK_TO_WRITE: {
      return Object.assign(
        {},
        state,
        { bookToWrite: action.payload }
      )
    }

    case REQUEST_BOOK_TO_EDIT: {
      return Object.assign(
        {},
        state,
        { bookToEdit: null }
      )
    }
    case RECEIVE_BOOK_TO_EDIT: {
      return Object.assign(
        {},
        state,
        { bookToEdit: action.payload }
      )
    }

    default: return state
  }
}
