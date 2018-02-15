import {
  NOTIFICATIONS_SHOW,
  NOTIFICATIONS_HIDE,
  NOTIFICATIONS_ADD,
  NOTIFICATIONS_REMOVE,
  NOTIFICATIONS_CLEAR
} from '../actions/notifications'

const defaultState = {
  listVisible: false,
  list: []
}

const notificationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_SHOW: {
      return Object.assign({}, state, { listVisible: true })
    }
    case NOTIFICATIONS_HIDE: {
      return Object.assign({}, state, { listVisible: false })
    }
    case NOTIFICATIONS_ADD: {
      return Object.assign({}, state, { list: [action.payload, ...state.list] })
    }
    case NOTIFICATIONS_REMOVE: {
      let index = action.payload
      if (action.payload === 'last') {
        index = state.list.length - 1
      }

      const newState = Object.assign({}, state, { list: [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1)
      ] })

      if (!newState.list.length) {
        newState.listVisible = false
      }

      return newState
    }
    case NOTIFICATIONS_CLEAR: {
      return Object.assign({}, state, { list: [] })
    }
    default: return state
  }
}

export default notificationsReducer
