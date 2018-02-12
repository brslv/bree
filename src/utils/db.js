import fetch from 'cross-fetch'
import {
  API_KEY,
  masterAuthHash,
  username,
  password
} from '../.data'

const BASE_URL = 'https://baas.kinvey.com'

/* general */
const handshake = function () {
  return fetch(`${BASE_URL}/appdata/${API_KEY}`, {
    headers: {
      'authorization': `Basic ${masterAuthHash()}`
    }
  })
    .then(r => r.json())
}

/* books */
const getAllBooks = function () {
  const authHash = btoa(`${username}:${password}`)

  return fetch(`${BASE_URL}/appdata/${API_KEY}/books`, {
    headers: {
      'authorization': `Basic ${authHash}`,
      'content-type': 'application/json'
    }
  })
    .then(r => r.json())
}

/* users */
function register(username, email, password) {
  return fetch(`${BASE_URL}/user/${API_KEY}`, {
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

function login() {

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
