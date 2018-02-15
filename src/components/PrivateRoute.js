import React from 'react'
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import { isLogged } from '../utils/user'

const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={() => {
    if (isLogged()) {
      return (
        <Component {...props} />
      )
    } else {
      return (
        <Redirect to="/login" />
      )
    }
  }} />
}

export default withRouter(PrivateRoute)
