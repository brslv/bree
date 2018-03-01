import {
  CONFIRMATION_SET,
  CONFIRMATION_UNSET
} from '../actions/confirmation'

const setConfirmation = (text, onConfirm) => {
  return (dispatch) => {
    dispatch({ type: CONFIRMATION_SET, payload: { text, onConfirm }})
  }
}

const unsetConfirmation = () => {
  return (dispatch) => {
    dispatch({ type: CONFIRMATION_UNSET })
  }
}

export {
  setConfirmation,
  unsetConfirmation
}
