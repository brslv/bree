import {
    REQUEST_CHAPTERS,
    RECEIVE_CHAPTERS,
    CHAPTER_ADDED,
    CHAPTER_DELETED
} from '../actions/chapters'

export default (state = [], action) => {
  switch(action.type) {
    case REQUEST_CHAPTERS: return []
    case RECEIVE_CHAPTERS: return action.payload.chapters.reverse()
    case CHAPTER_ADDED: return [action.payload, ...state]
    case CHAPTER_DELETED: return state.filter(chapter => chapter.id !== action.payload).reverse()
    default: return state
  }
}