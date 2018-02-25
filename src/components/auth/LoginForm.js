import React, { Component } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Box from '../../atoms/Box'

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
      <Box className="Component--LoginForm">
        <div className="input-group">
          <Input
            type="text"
            placeholder="Username"
            onChange={e => this.onInputChange(e.target.value, 'username')}
            validate={e => {
              return e.target.value === '' ? 'Invalid username' : null
            }}
          />
        </div>

        <div className="input-group">
          <Input
            type="password"
            placeholder="Password"
            onChange={e => this.onInputChange(e.target.value, 'password')}
            validate={e => {
              console.warn(e.target.value);
              return e.target.value === '' ? 'Invalid password' : null
            }}
          />
        </div>

        <div className="buttons-container">
          <Button
            type="button"
            onClick={() => this.props.onSubmit({
              username: this.state.username,
              password: this.state.password
            })}
            disabled={this.state.username.trim() === '' || this.state.password.trim() === ''}
          >
            Login
          </Button>
          <p><Link to="/register">register</Link></p>
        </div>
      </Box>
    )
  }
}

export default LoginForm
