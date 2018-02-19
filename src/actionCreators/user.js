import {
  REGISTER_START,
  REGISTER_READY,
  LOGIN_START,
  LOGIN_READY,
  LOGIN_USER_DATA_RECEIVED
} from '../actions/user'
import { startLoading, stopLoading } from '../actionCreators/isLoading'
import { register as registerUser } from '../utils/db'
import { login as loginUser } from '../utils/db'
import {
  addNotification,
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
        dispatch(stopLoading())

        if (response.status === 201) {
          clearRegisterForm()
          dispatch(addNotification({ content: 'Successful registration 🎉' }))

          history.push('/login')
        }

        if (response.status === 409) {
          dispatch(addNotification({ content: 'User already exists' }))
        }
      })
  }
}

const loginReady = loginData => {
  return { type: LOGIN_READY, payload: loginData }
}

const loginUserDataReceived = userData => {
  return { type: LOGIN_USER_DATA_RECEIVED, payload: userData }
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

          response.json().then(userData => {
            dispatch(loginUserDataReceived(userData))
            history.push('/books')
          })
        }

        if (response.status === 401) {
          dispatch(addNotification({ content: 'Invalid credentials. Please, try again.' }))
        }
      })
  }
}

export {
  register,
  login
}
