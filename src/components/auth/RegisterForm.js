import React, { Component } from 'react'
import './RegisterForm.css'
import { Link } from 'react-router-dom'
import Box from '../../atoms/Box'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

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
      <Box className="Component--RegisterForm">
        <Input
          type="text"
          value={this.state.username}
          onChange={e => this.onInputChange(e.target.value, 'username')}
          placeholder="Username"
        />

        <Input
          type="text"
          value={this.state.email}
          onChange={e => this.onInputChange(e.target.value, 'email')}
          placeholder="Email"
        />

        <Input
          type="password"
          value={this.state.password}
          onChange={e => this.onInputChange(e.target.value, 'password')}
          placeholder="Password"
        />

        <div className="buttons-container">
          <Button
            onClick={() => this.props.onSubmit({
              username: this.state.username,
              email: this.state.email,
              password: this.state.password
            }, this.clearRegisterForm.bind(this))}
            type="button"
          >
            Register
          </Button>

          <div>
            <Link to="/login">login</Link>
          </div>
        </div>
      </Box>
    )
  }
}

export default RegisterForm
