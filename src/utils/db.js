import fetch from 'cross-fetch'
import {
  APP_KEY,
  masterAuthHash,
  username,
  password
} from '../.data'

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
  const authHash = btoa(`${username}:${password}`)

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/books`, {
    headers: {
      'authorization': `Basic ${authHash}`,
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

function logout() {

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
