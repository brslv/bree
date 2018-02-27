import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS
} from '../actions/books'
import { getAllBooks } from '../utils/db'
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

export {
  requestBooks
}
