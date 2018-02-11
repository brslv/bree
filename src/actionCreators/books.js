import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS
} from '../actions/books'
import { getAllBooks } from '../utils/db'

const requestBooks = () => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_BOOKS })

    const books = await getAllBooks()

    dispatch({
      type: RECEIVE_BOOKS,
      payload: { books }
    })
  }
}

export {
  requestBooks
}
