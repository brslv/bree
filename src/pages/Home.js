import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { isLogged } from '../utils/user'

/**
 * This component acts as a controller, deciding which
 * page to load as home - the login or the books page.
 */
class Home extends Component {
  render() {
    if (isLogged()) {
      return (
        <Redirect to="/books" />
      )
    } else {
      return (
        <Redirect to="/login" />
      )
    }
  }
}

export default Home
