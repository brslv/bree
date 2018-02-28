import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  BOOK_ADDED
} from '../actions/books'
import { getAllBooks, addBook as addNewBook } from '../utils/db'
import { startLoading, stopLoading } from './isLoading'

const requestBooks = (user) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_BOOKS })
    dispatch(startLoading())

    const books = await getAllBooks(user)

    dispatch(stopLoading())
    dispatch({
      type: RECEIVE_BOOKS,
      payload: { books }
    })
  }
}

const addBook = (book, user) => {
  return async (dispatch) => {
    dispatch(startLoading())

    const bookData = await addNewBook(book, user)

    console.warn('The new book: ', bookData)

    dispatch(stopLoading())
    dispatch({
      type: BOOK_ADDED,
      payload: bookData
    })
  }
}

export {
  requestBooks,
  addBook
}
