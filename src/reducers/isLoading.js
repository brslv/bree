import {
  LOADING_START,
  LOADING_END,
} from '../actions/isLoading'

export default (state = false, action) => {
  switch (action.type) {
    case LOADING_START: return true
    case LOADING_END: return false
    default: return state
  }
}