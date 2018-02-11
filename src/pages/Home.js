import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Books from './Books'
import Login from './Login'

/**
 * This component acts as a controller, deciding which
 * page to load as home - the login or the books page.
 */
class Home extends Component {
  isLogged() {
    return true
  }

  render() {
    if (this.isLogged()) {
      return (
        <div>
          <Navigation />
          <Books />
        </div>
      )
    } else {
      return (
        <Login />
      )
    }
  }
}

export default Home
