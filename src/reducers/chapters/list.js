import {
    REQUEST_CHAPTERS,
    RECEIVE_CHAPTERS,
    CHAPTER_ADDED,
    CHAPTER_DELETED
} from '../../actions/chapters/list'

export default (state = [], action) => {
  switch(action.type) {
    case REQUEST_CHAPTERS: return []
    case RECEIVE_CHAPTERS: return action.payload.chapters.reverse()
    case CHAPTER_ADDED: return [action.payload, ...state]
    case CHAPTER_DELETED: {
      return state.filter(chapter => chapter._id !== action.payload)
    }
    default: return state
  }
}