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

const getBook = function (id, user) {
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

const addBook = function (book, user) {
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

const editBook = function (book, user) {
  const authHash = user.authToken

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/books/${book.id}`, {
    'method': 'PUT',
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

const deleteBook = function (id, user) {
  const authHash = user.authToken

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/books/${id}`, {
    'method': 'DELETE',
    headers: {
      'authorization': `Kinvey ${authHash}`,
      'content-type': 'application/json',
    }
  })
}

/* chapters */
const getChapters = function (bookId, user) {
  const authHash = user.authToken
  const filters = JSON.stringify({
    "bookId": bookId,
    "_acl.creator": user.id
  })

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/chapters/?query=${filters}`, {
    headers: {
      'authorization': `Kinvey ${authHash}`,
      'content-type': 'application/json'
    }
  })
}

const addChapter = function (chapter, bookId, user) {
  const authHash = user.authToken

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/chapters`, {
    'method': 'POST',
    'body': JSON.stringify({
      title: chapter.title,
      content: chapter.content,
      bookId
    }),
    headers: {
      'authorization': `Kinvey ${authHash}`,
      'content-type': 'application/json',
    }
  })
}

const deleteChapter = function (id, user) {
  const authHash = user.authToken

  return fetch(`${BASE_URL}/appdata/${APP_KEY}/chapters/${id}`, {
    'method': 'DELETE',
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
  editBook,
  deleteBook,

  /* chapters */
  getChapters,
  addChapter,
  deleteChapter,

  /* users */
  register,
  login,
  logout
}
