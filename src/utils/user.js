const isLogged = () => {
  const rawUserData = localStorage.getItem('__userData')

  if (!rawUserData) {
    return false
  }

  const userData = JSON.parse(rawUserData)

  return !!userData.authToken
}

const getLoggedUser = () => {
  if (!isLogged()) {
    return null
  }

  return JSON.parse(localStorage.getItem('__userData'))
}

export { isLogged, getLoggedUser }
