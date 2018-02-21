import React from 'react'
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={() => {
    if (props.user) {
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
