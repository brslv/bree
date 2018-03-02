import {
  REQUEST_BOOK_TO_EDIT,
  RECEIVE_BOOK_TO_EDIT,
  BOOK_EDIT_START,
  BOOK_EDIT_END
} from '../actions/bookToEdit'
import {
  getBook,
  editBook as editExistingBook
} from '../utils/db'
import {
  startLoading,
  stopLoading
} from './isLoading'
import {
  bookEditSuccess,
  bookEditFail
} from '../notifications'
import { addNotification } from './notifications'

const requestBook = (id, user) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_BOOK_TO_EDIT })
    dispatch(startLoading())

    const response = await getBook(id, user)

    if (response.status !== 200 || !response.ok) {
      dispatch(stopLoading())
      return
    }

    const book = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: RECEIVE_BOOK_TO_EDIT,
      payload: book || []
    })
  }
}

const editBook = (book, history, user) => {
  return async (dispatch) => {
    dispatch({ type: BOOK_EDIT_START })
    dispatch(startLoading())

    const response = await editExistingBook(book, user)

    if (response.status !== 200 || !response.ok) {
      dispatch(stopLoading())
      dispatch(addNotification(bookEditFail()))
      return
    }

    dispatch(stopLoading())
    dispatch({ type: BOOK_EDIT_END })
    dispatch(addNotification(bookEditSuccess()))
    history.push('/books')
  }
}

export {
  requestBook,
  editBook
}
