const isLogged = () => {
  const rawUserData = localStorage.getItem('__userData')

  if (!rawUserData) {
    return false
  }

  const userData = JSON.parse(rawUserData)

  return !!userData.authToken
}

export { isLogged }
