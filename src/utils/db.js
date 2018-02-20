import fetch from 'cross-fetch'
import {
  APP_KEY,
  masterAuthHash,
} from '../.data'
import { getLoggedUser } from './user'

const BASE_URL = 'https://baas.kinvey.com'

/* general */
const handshake = function () {
  return fetch(`${BASE_URL}/appdata/${APP_KEY}`, {
    headers: {
      'authorization': `Basic ${masterAuthHash()}`
    }
  })
    .then(r => r.json())
}

/* books */
const getAllBooks = function () {
  const authHash = getLoggedUser().authToken

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/books`, {
    headers: {
      'authorization': `Kinvey ${authHash}`,
      'content-type': 'application/json'
    }
  })
    .then(r => r.json())
}

/* users */
function register(username, email, password) {
  return fetch(`${BASE_URL}/user/${APP_KEY}`, {
    method: 'POST',
    headers: {
      'authorization': `Basic ${masterAuthHash()}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })
}

function login(username, password) {
  return fetch(`${BASE_URL}/user/${APP_KEY}/login`, {
    method: 'POST',
    headers: {
      'authorization': `Basic ${masterAuthHash()}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
}

function logout(authToken) {
  return fetch(`${BASE_URL}/user/${APP_KEY}/_logout`, {
    method: 'POST',
    headers: {
      'authorization': `Kinvey ${authToken}`
    }
  })
}

export {
  /* general */
  handshake,

  /* books */
  getAllBooks,

  /* users */
  register,
  login,
  logout
}
