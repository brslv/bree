import { API_KEY, APP_SECRET } from '../.data'

const BASE_URL = 'https://baas.kinvey.com'

const handshake = () => {
  const authHash = btoa(`${API_KEY}:${APP_SECRET}`)
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/appdata/${API_KEY}`, {
      headers: {
        'authorization': `Basic ${authHash}`
      }
    })
      .then(r => r.json())
      .then(json => resolve(json))
  })
}

export {
  handshake
}
