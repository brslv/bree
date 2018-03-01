import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  BOOK_ADDED
} from '../actions/books'
import {
  getAllBooks,
  addBook as addNewBook
} from '../utils/db'
import {
  startLoading,
  stopLoading
} from './isLoading'
import { addNotification } from '../actionCreators/notifications'
import {
  bookAddFail,
  bookAddSuccess,
  getAllBooksFail
} from '../notifications'

const requestBooks = (user) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_BOOKS })
    dispatch(startLoading())

    const response = await getAllBooks(user)

    if (response.status !== 200 || !response.ok) {
      dispatch(stopLoading())
      dispatch(addNotification(getAllBooksFail()))
      return
    }

    const books = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: RECEIVE_BOOKS,
      payload: { books }
    })
  }
}

const addBook = (book, user, history) => {
  return async (dispatch) => {
    dispatch(startLoading())

    const response = await addNewBook(book, user)

    if (response.status !== 201 || !response.ok) {
      dispatch(stopLoading())
      dispatch(addNotification(bookAddFail()))
      return
    }

    const bookData = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: BOOK_ADDED,
      payload: bookData
    })
    dispatch(addNotification(bookAddSuccess()))

    if (history) {
      history.push('/books')
    }
  }
}

export {
  requestBooks,
  addBook
}
