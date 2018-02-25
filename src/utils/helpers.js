const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email)
}

export {
  validateEmail
}
