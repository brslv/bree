import {
  EDIT_CHAPTER_MODAL_SHOW,
  EDIT_CHAPTER_MODAL_HIDE
} from '../../actions/chapters/editModalVisibility'

const defaultState = false

export default (state = defaultState, action) => {
  switch(action.type) {
    case EDIT_CHAPTER_MODAL_SHOW: return true
    case EDIT_CHAPTER_MODAL_HIDE: return false
    default: return state
  }
}