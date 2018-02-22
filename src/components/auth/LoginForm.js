import React, { Component } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

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
        <Input
          type="text"
          placeholder="Username"
          onChange={e => this.onInputChange(e.target.value, 'username')}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={e => this.onInputChange(e.target.value, 'password')}
        />

        <div className="Buttons-container">
          <Button
            type="button"
            onClick={() => this.props.onSubmit({
              username: this.state.username,
              password: this.state.password
            })}
          >
            Login
          </Button>
          <p><Link to="/register">register</Link></p>
        </div>
      </div>
    )
  }
}

export default LoginForm
