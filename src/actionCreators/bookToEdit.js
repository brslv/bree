import {
  REQUEST_BOOK_TO_EDIT,
  RECEIVE_BOOK_TO_EDIT,
} from '../actions/bookToEdit'
import { getBook } from '../utils/db'
import { startLoading, stopLoading } from './isLoading'

const requestBook = (id, user) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_BOOK_TO_EDIT })
    dispatch(startLoading())

    const response = await getBook(user, id)

    if (response.status !== 200 || !response.ok) {
      dispatch(stopLoading())
      return
    }

    const book = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: RECEIVE_BOOK_TO_EDIT,
      payload: book[0]
    })
  }
}

export { requestBook }
