import {
  REQUEST_BOOK_TO_WRITE,
  RECEIVE_BOOK_TO_WRITE,
} from '../actions/currentlyWriting'
import {
  getBook,
} from '../utils/db'
import {
  startLoading,
  stopLoading
} from './isLoading'

const requestBook = (id, user) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_BOOK_TO_WRITE })
    dispatch(startLoading())

    const response = await getBook(id, user)

    if (response.status !== 200 || !response.ok) {
      dispatch(stopLoading())
      return
    }

    const book = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: RECEIVE_BOOK_TO_WRITE,
      payload: book || []
    })
  }
}

export {
  requestBook
}
