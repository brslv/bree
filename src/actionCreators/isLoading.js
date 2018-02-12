import {
  LOADING_START,
  LOADING_END
} from '../actions/isLoading'

const startLoading = () => {
  return { type: LOADING_START }
}

const stopLoading = () => {
  return { type: LOADING_END }
}

export {
  startLoading,
  stopLoading
}
