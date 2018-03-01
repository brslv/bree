const invalidCredentials = () => {
  return {
    content: 'Invalid credentials. Please, try again.'
  }
}

const successfullRegistration = () => {
  return {
    content: 'Successful registration. 🎉'
  }
}

const userAlreadyExists = () => {
  return {
    content: 'User already exists. 😲'
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

const bookEditFail = () => {
  return {
    content: `Couldn't edit your book. Please, try again later.`
  }
}

const bookEditSuccess = () => {
  return {
    content: 'Your book has been edited successfully. 🎉'
  }
}

export {
  invalidCredentials,
  successfullRegistration,
  userAlreadyExists,
  getAllBooksFail,
  bookAddSuccess,
  bookAddFail,
  bookEditSuccess,
  bookEditFail
}
