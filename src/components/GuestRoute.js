import React from 'react'
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import { isLogged } from '../utils/user'

const GuestRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={() => {
    if (!isLogged()) {
      return (
        <Component {...props} />
      )
    } else {
      return (
        <Redirect to="/books" />
      )
    }
  }} />
}

export default withRouter(GuestRoute)
