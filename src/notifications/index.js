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

const getAllBooksFail = () => {
  return {
    content: `Could't fetch books. Please, try again later.`
  }
}

const bookAddFail = () => {
  return {
    content: `Couldn't save your book. Please, try again later.`
  }
}

const bookAddSuccess = () => {
  return {
    content: 'A new book has been added. 🎉'
  }
}

export {
  invalidCredentials,
  successfullRegistration,
  userAlreadyExists,
  getAllBooksFail,
  bookAddSuccess,
  bookAddFail
}
