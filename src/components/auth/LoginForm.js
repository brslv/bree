import React, { Component } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  onInputChange(value, name) {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="Component--LoginForm">
        <input
          type="text"
          placeholder="Username"
          onChange={e => this.onInputChange(e.target.value, 'username')}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => this.onInputChange(e.target.value, 'password')}
        />

        <button
          type="button"
          onClick={() => this.props.onSubmit({
            username: this.state.username,
            password: this.state.password
          })}
        >
          Login
        </button>

        <div>
          <p><Link to="/register">register</Link></p>
        </div>
      </div>
    )
  }
}

export default LoginForm
