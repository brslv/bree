import {
  REGISTER_START,
  REGISTER_READY,
  LOGIN_START,
  LOGIN_READY,
  LOGIN_USER_DATA_RECEIVED,
  LOGOUT_START,
  LOGOUT_END
} from '../actions/user'

export default (state = null, action) => {
  switch (action.type) {
    case REGISTER_START: return state
    case REGISTER_READY: return state
    case LOGIN_START: return state
    case LOGIN_READY: return state
    case LOGIN_USER_DATA_RECEIVED: return action.payload
    case LOGOUT_START: return state
    case LOGOUT_END: return null
    default: return state
  }
}
