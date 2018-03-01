import React from 'react'
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={(renderProps) => {
    if (props.user) {
      return (
        <Component {...props} {...renderProps} />
      )
    } else {
      return (
        <Redirect to="/login" />
      )
    }
  }} />
}

export default withRouter(PrivateRoute)
