import {
  REGISTER_START,
  REGISTER_READY,
  LOGIN_START,
  LOGIN_READY,
  LOGIN_USER_DATA_RECEIVED,
  LOGOUT_START,
  LOGOUT_END
} from '../actions/user'
import { startLoading, stopLoading } from '../actionCreators/isLoading'
import {
  login as loginUser,
  register as registerUser,
  logout as logoutUser
} from '../utils/db'
import { addNotification } from '../actionCreators/notifications'

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
        dispatch(stopLoading())

        if (response.status === 201) {
          dispatch(registerReady(response))
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
            const essentialUserData = {
              username: userData.username,
              email: userData.email,
              id: userData._id,
              authToken: userData._kmd.authtoken
            }

            dispatch(loginUserDataReceived(essentialUserData))

            // save user data to localStorage
            localStorage.setItem('__userData', JSON.stringify(essentialUserData))

            history.push('/books')
          })
        }

        if (response.status === 401) {
          dispatch(addNotification({ content: 'Invalid credentials. Please, try again.' }))
        }
      })
  }
}

const logout = () => {
  return (dispatch, getState) => {
    dispatch({ type: LOGOUT_START })
    dispatch(startLoading())

    return logoutUser(getState().user.authToken)
      .then(response => {
        if (response.status === 204) {
          // user logged out
          localStorage.removeItem('__userData')

          dispatch({ type: LOGOUT_END })
          dispatch(stopLoading())
        }
      })
  }
}

export {
  register,
  login,
  logout
}
