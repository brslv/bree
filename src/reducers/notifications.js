import {
  NOTIFICATIONS_ADD,
  NOTIFICATIONS_REMOVE,
  NOTIFICATIONS_CLEAR
} from '../actions/notifications'

const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case NOTIFICATIONS_ADD: {
      return [action.payload, ...state]
    }
    case NOTIFICATIONS_REMOVE: {
      let index = action.payload
      if (action.payload === 'last') {
        index = state.length - 1
      }

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    }
    case NOTIFICATIONS_CLEAR: {
      return []
    }
    default: return state
  }
}

export default notificationsReducer
