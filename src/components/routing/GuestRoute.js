import React from 'react'
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

const GuestRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={(renderProps) => {
    if (!props.user) {
      return (
        <Component {...props} {...renderProps} />
      )
    } else {
      return (
        <Redirect to="/books" />
      )
    }
  }} />
}

export default withRouter(GuestRoute)
