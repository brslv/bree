import {
  REGISTER_START,
  REGISTER_READY
} from '../actions/user'
import { register as registerUser } from '../utils/db'

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

export { register }
