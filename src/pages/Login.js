import React, { Component } from 'react'
import './Login.css'
import LoginForm from '../components/auth/LoginForm'
import { login } from '../actionCreators/user'
import { connect } from 'react-redux'

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

const mapDispatchToProps = dispatch => ({
  login: ({ username, password }) => {
    dispatch(login({ username, password }))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Login);
