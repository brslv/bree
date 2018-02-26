const invalidCredentials = () => {
  return {
    content: 'Invalid credentials. Please, try again.'
  }
}

const successfullRegistration = () => {
  return {
    content: 'Successful registration 🎉'
  }
}

const userAlreadyExists = () => {
  return {
    content: 'User already exists 😲'
  }
}

export {
  invalidCredentials,
  successfullRegistration,
  userAlreadyExists
}
