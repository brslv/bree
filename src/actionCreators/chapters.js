import {
  REQUEST_CHAPTERS,
  RECEIVE_CHAPTERS,
  CHAPTER_ADDED
} from '../actions/chapters'
import { startLoading, stopLoading } from './isLoading';
import {
  getChapters,
  addChapter as addNewChapter
} from '../utils/db'

const requestChapters = (bookId, user) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_CHAPTERS })
    dispatch(startLoading())

    const response = await getChapters(bookId, user)

    if (!response.ok) {
      dispatch(stopLoading())
      console.error('error...', response)
      // TODO: handle error with notification
    }

    const chapters = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: RECEIVE_CHAPTERS,
      payload: { chapters }
    })
  }
}

const addChapter = ({title, content = ''}, bookId, user) => {
  return async (dispatch) => {
    dispatch(startLoading())

    const response = await addNewChapter({ title, content }, bookId, user)

    if (response.status !== 201 || !response.ok) {
      dispatch(stopLoading())
      // dispatch(addNotification(bookAddFail()))
      return
    }

    const chapterData = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: CHAPTER_ADDED,
      payload: chapterData
    })
    // dispatch(addNotification(bookAddSuccess()))
  }
}

const deleteChapter = (id) => {
  // TODO
}

export {
  requestChapters,
  addChapter,
  deleteChapter
}