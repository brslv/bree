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

const bookDeleteFail = () => {
  return {
    content: `Couldn't delete your book. Please, try again later.`
  }
}

const bookDeleteSuccess = () => {
  return {
    content: 'Your book has been deleted successfully. 🎉'
  }
}

const chapterAddFail = () => {
  return {
    content: `Couldn't save the chapter. Please, try again later.`
  }
}

const chapterAddSuccess = () => {
  return {
    content: 'A new chapter has been added. 🎉'
  }
}

const chapterDeleteFail = () => {
  return {
    content: `Couldn't delete the chapter. Please, try again later.`
  }
}

const chapterDeleteSuccess = () => {
  return {
    content: 'The chapter has been deleted successfully. 🎉'
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
  bookEditFail,
  bookDeleteSuccess,
  bookDeleteFail,
  chapterAddSuccess,
  chapterAddFail,
  chapterDeleteSuccess,
  chapterDeleteFail
}
