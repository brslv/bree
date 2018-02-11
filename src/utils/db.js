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
      'authorization': `Basic ${authHash}`
    }
  })
    .then(r => r.json())
}

export {
  /* general */
  handshake,

  /* books */
  getAllBooks
}
