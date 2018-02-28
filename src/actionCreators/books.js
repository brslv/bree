import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  BOOK_ADDED
} from '../actions/books'
import { getAllBooks, addBook as addNewBook } from '../utils/db'
import { startLoading, stopLoading } from './isLoading'
import { addNotification } from '../actionCreators/notifications'

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

const addBook = (book, user, history) => {
  return async (dispatch) => {
    dispatch(startLoading())

    const response = await addNewBook(book, user)

    if (response.status !== 201) {
      dispatch(stopLoading())
      dispatch(addNotification({ content: `Couldn't save your book. Please, try again later.` }))
      return
    }

    const bookData = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: BOOK_ADDED,
      payload: bookData
    })
    dispatch(addNotification({ content: 'A new book has been added. 🎉'}))

    if (history) {
      history.push('/books')
    }
  }
}

export {
  requestBooks,
  addBook
}
