import {
  REQUEST_CHAPTERS,
  RECEIVE_CHAPTERS,
  CHAPTER_ADDED,
  CHAPTER_DELETED
} from '../actions/chapters'
import { startLoading, stopLoading } from './isLoading';
import {
  getChapters,
  addChapter as addNewChapter,
  deleteChapter as deleteExistingChapter
} from '../utils/db'
import { addNotification } from '../actionCreators/notifications'
import {
  chapterAddFail,
  chapterAddSuccess,
  chapterDeleteFail,
  chapterDeleteSuccess
} from '../notifications/'

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
      dispatch(addNotification(chapterAddFail()))
      return
    }

    const chapterData = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: CHAPTER_ADDED,
      payload: chapterData
    })
    dispatch(addNotification(chapterAddSuccess()))
  }
}

const deleteChapter = (id, user) => {
  return async (dispatch) => {
    dispatch(startLoading())

    const response = await deleteExistingChapter(id, user)

    if (response.status !== 200 || !response.ok) {
      dispatch(stopLoading())
      dispatch(addNotification(chapterDeleteFail()))
      return
    }

    dispatch(stopLoading())
    dispatch({
      type: CHAPTER_DELETED,
      payload: id
    })
    dispatch(addNotification(chapterDeleteSuccess()))
  }
}

export {
  requestChapters,
  addChapter,
  deleteChapter
}