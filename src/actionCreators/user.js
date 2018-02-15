import {
  REGISTER_START,
  REGISTER_READY,
  LOGIN_START,
  LOGIN_READY
} from '../actions/user'
import { startLoading, stopLoading } from '../actionCreators/isLoading'
import { register as registerUser } from '../utils/db'
import { login as loginUser } from '../utils/db'
import {
  addNotification,
  showNotifications
} from '../actionCreators/notifications'

const registerReady = registerData => {
  return { type: REGISTER_READY, payload: registerData }
}

const register = ({
    username,
    email,
    password
  },
  clearRegisterForm,
  history
) => {
  return dispatch => {
    dispatch({ type: REGISTER_START })
    dispatch(startLoading())

    return registerUser(username, email, password)
      .then(response => {
        dispatch(registerReady(response))
        clearRegisterForm()
        dispatch(stopLoading())

        if (response.status === 201) {
          dispatch(addNotification({ content: 'Register success!' }))
          dispatch(showNotifications())

          history.push('/login')
        }
      })
  }
}

const loginReady = loginData => {
  return { type: LOGIN_READY, payload: loginData }
}

const login = ({
  history,
  username,
  password
}) => {
  return dispatch => {
    dispatch({ type: LOGIN_START })
    dispatch(startLoading())

    return loginUser(username, password)
      .then(response => {
        dispatch(loginReady(response))
        dispatch(stopLoading())

        if (response.status === 200) {
          dispatch(addNotification({ content: 'Success!' }))
          dispatch(showNotifications())

          history.push('/books')
        }
      })
  }
}

export {
  register,
  login
}
