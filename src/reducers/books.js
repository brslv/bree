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
} from '../actions/currentlyWriting'
import {
  REQUEST_BOOK_TO_EDIT,
  RECEIVE_BOOK_TO_EDIT,
} from '../actions/currentlyEditing'

const defaultState = {
  list: null,
  currentlyEditing: null,
  currentlyWriting: null
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
        { currentlyWriting: null }
      )
    }
    case RECEIVE_BOOK_TO_WRITE: {
      return Object.assign(
        {},
        state,
        { currentlyWriting: action.payload }
      )
    }

    case REQUEST_BOOK_TO_EDIT: {
      return Object.assign(
        {},
        state,
        { currentlyEditing: null }
      )
    }
    case RECEIVE_BOOK_TO_EDIT: {
      return Object.assign(
        {},
        state,
        { currentlyEditing: action.payload }
      )
    }

    default: return state
  }
}
