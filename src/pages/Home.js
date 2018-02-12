import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

/**
 * This component acts as a controller, deciding which
 * page to load as home - the login or the books page.
 */
class Home extends Component {
  isLogged() {
    return false 
  }

  render() {
    if (this.isLogged()) {
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
