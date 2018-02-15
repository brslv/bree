import React, { Component } from 'react'
import './Login.css'
import LoginForm from '../components/auth/LoginForm'
import { login } from '../actionCreators/user'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  onSubmit({ username, password }) {
    this.props.login({ username, password })
  }

  render() {
    return (
      <div className="Page--Login">
        <h1>Login page</h1>
        <LoginForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: ({ username, password }) => {
    dispatch(login({ history: ownProps.history, username, password }))
  }
})

const connected = connect(
  null,
  mapDispatchToProps
)(Login)

export default withRouter(connected)
