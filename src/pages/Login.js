import React, { Component } from 'react'
import './Login.css'
import LoginForm from '../components/login/LoginForm'

class Login extends Component {
  render() {
    return (
      <div className="Page--Login">
        <h1>Login page</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
