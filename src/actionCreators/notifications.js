import {
  NOTIFICATIONS_SHOW,
  NOTIFICATIONS_HIDE,
  NOTIFICATIONS_ADD,
  NOTIFICATIONS_REMOVE,
  NOTIFICATIONS_CLEAR
} from '../actions/notifications'

const showNotifications = () => {
  return { type: NOTIFICATIONS_SHOW }
}

const hideNotifications = () => {
  return { type: NOTIFICATIONS_HIDE }
}

const addNotification = (notification) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(removeNotification())
    }, 3000)

    dispatch({ type: NOTIFICATIONS_ADD, payload: notification })
  }
}

const removeNotification = (index = 'last') => {
  return { type: NOTIFICATIONS_REMOVE, payload: index }
}

const clearNotifications = () => {
  return { type: NOTIFICATIONS_CLEAR }
}

export {
  showNotifications,
  hideNotifications,
  addNotification,
  removeNotification,
  clearNotifications
}
