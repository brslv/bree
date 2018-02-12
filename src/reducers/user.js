import {
  REGISTER_START,
  REGISTER_READY
} from '../actions/user'

export default (state = null, action) => {
  switch (action.type) {
    case REGISTER_START: return state
    case REGISTER_READY: return action.payload
    default: return state
  }
}
