import React, { Component } from 'react'
import './RegisterForm.css'
import { Link } from 'react-router-dom'

class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  onInputChange(value, name) {
    this.setState({ [name]: value })
  }

  clearRegisterForm() {
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="Component--RegisterForm">
        <input
          type="text"
          value={this.state.username}
          onChange={e => this.onInputChange(e.target.value, 'username')}
          placeholder="Username"
        />

        <input
          type="text"
          value={this.state.email}
          onChange={e => this.onInputChange(e.target.value, 'email')}
          placeholder="Email"
        />

        <input
          type="password"
          value={this.state.password}
          onChange={e => this.onInputChange(e.target.value, 'password')}
          placeholder="Password"
        />

        <button onClick={() => this.props.onSubmit({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }, this.clearRegisterForm.bind(this))} type="button">Register</button>

        <div>
          <Link to="/login">login</Link>
        </div>
      </div>
    )
  }
}

export default RegisterForm
