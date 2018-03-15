import {
  REQUEST_CHAPTER_TO_EDIT,
  RECEIVE_CHAPTER_TO_EDIT
} from '../../actions/chapters/currentlyEditing'
import {
  EDIT_CHAPTER_MODAL_SHOW,
  EDIT_CHAPTER_MODAL_HIDE
} from '../../actions/chapters/editModalVisibility'
import {
  startLoading,
  stopLoading
} from '../../actionCreators/isLoading'
import {
  getChapter
} from '../../utils/db'

const showEditChapterModal = (chapterId, user) => {
  return async (dispatch) => {
    dispatch(requestChapter(chapterId, user))
    dispatch({ type: EDIT_CHAPTER_MODAL_SHOW })
  }
}

const hideEditChapterModal = () => {
  return async dispatch => dispatch({ type: EDIT_CHAPTER_MODAL_HIDE })
}

const requestChapter = (id, user) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_CHAPTER_TO_EDIT })
    dispatch(startLoading())

    const response = await getChapter(id, user)

    if (response.status !== 200 || !response.ok) {
      dispatch(stopLoading())
      return
    }

    const chapter = await response.json()

    dispatch(stopLoading())
    dispatch({
      type: RECEIVE_CHAPTER_TO_EDIT,
      payload: chapter || []
    })
  }
}

const editChapter = (chapter, history, user) => {
  return async (dispatch) => {
    console.warn('Editing chapter...')
    // dispatch({ type: BOOK_EDIT_START })
    // dispatch(startLoading())

    // const response = await editExistingBook(book, user)

    // if (response.status !== 200 || !response.ok) {
    //   dispatch(stopLoading())
    //   dispatch(addNotification(bookEditFail()))
    //   return
    // }

    // dispatch(stopLoading())
    // dispatch({ type: BOOK_EDIT_END })
    // dispatch(addNotification(bookEditSuccess()))
    // history.push('/books')
  }
}

export {
  requestChapter,
  editChapter,
  showEditChapterModal,
  hideEditChapterModal
}