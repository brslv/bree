import {
  REGISTER_START,
  REGISTER_READY,
  LOGIN_START,
  LOGIN_READY
} from '../actions/user'
import { register as registerUser } from '../utils/db'
import { login as loginUser } from '../utils/db'

const registerReady = registerData => {
  return { type: REGISTER_READY, payload: registerData }
}

const register = ({
    username,
    email,
    password
  }, clearRegisterForm
) => {
  return dispatch => {
    dispatch({ type: REGISTER_START })

    return registerUser(username, email, password)
      .then(response => {
        dispatch(registerReady(response))
        clearRegisterForm()
      })
  }
}

const loginReady = loginData => {
  return { type: LOGIN_READY, payload: loginData }
}

const login = ({
  username,
  password
}) => {
  return dispatch => {
    dispatch({ type: LOGIN_START })

    return loginUser(username, password)
      .then(response => {
        console.warn(response)
        dispatch(loginReady(response))
      })
  }
}

export {
  register,
  login
}
