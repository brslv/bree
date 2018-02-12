import {
  REGISTER_START,
  REGISTER_READY,
  LOGIN_START,
  LOGIN_READY
} from '../actions/user'

export default (state = null, action) => {
  switch (action.type) {
    case REGISTER_START: return state
    case REGISTER_READY: return action.payload
    case LOGIN_START: return state
    case LOGIN_READY: return action.payload
    default: return state
  }
}
