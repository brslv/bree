import {
  CONFIRMATION_SET,
  CONFIRMATION_UNSET,
} from '../actions/confirmation'

export default (state = null, action) => {
  switch (action.type) {
    case CONFIRMATION_SET: return action.payload
    case CONFIRMATION_UNSET: return null
    default: return state
  }
}
