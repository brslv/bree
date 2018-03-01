import fetch from 'cross-fetch'
import {
  APP_KEY,
  masterAuthHash,
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
const getAllBooks = function (user) {
  const authHash = user.authToken
  const filters = JSON.stringify({
    "_acl.creator": `${user.id}`
  })

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/books?query=${filters}`, {
    headers: {
      'authorization': `Kinvey ${authHash}`,
      'content-type': 'application/json'
    }
  })
}

const getBook = function (user, id) {
  const authHash = user.authToken
  const filters = JSON.stringify({
    _id: id
  })

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/books?query=${filters}`, {
    headers: {
      'authorization': `Kinvey ${authHash}`,
      'content-type': 'application/json'
    }
  })
}

const addBook = function (user, book) {
  const authHash = user.authToken

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/books`, {
    'method': 'POST',
    'body': JSON.stringify({
      title: book.title,
      description: book.description
    }),
    headers: {
      'authorization': `Kinvey ${authHash}`,
      'content-type': 'application/json',
    }
  })
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
  getBook,
  addBook,

  /* users */
  register,
  login,
  logout
}
