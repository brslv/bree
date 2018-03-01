import React, { Component } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Box from '../../atoms/Box'
import Form from '../../atoms/Form'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      hasErrors: false
    }
  }

  checkInputsForErrors() {
    const errors = []

    for (let key in this.refs) {
      const error = this.refs[key].state.error

      if (error) {
        errors.push(error)
      }
    }

    return errors
  }

  onInputChange(value, name) {
    const errors = this.checkInputsForErrors()

    this.setState({
      [name]: value,
      hasErrors: !!errors.length
    })
  }

  render() {
    return (
      <Form className="Component--LoginForm">
        <Box>
          <div className="form-items">
            <div className="input-group">
              <Input
                ref="username"
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
                ref="password"
                type="password"
                placeholder="Password"
                onChange={e => this.onInputChange(e.target.value, 'password')}
                validate={e => {
                  return e.target.value === '' ? 'Invalid password' : null
                }}
              />
            </div>
          </div>

          <div className="form-controls">
            <Button
              type="button"
              onClick={() => this.props.onSubmit({
                username: this.state.username,
                password: this.state.password
              })}
              disabled={
                this.state.username.trim() === ''
                ||this.state.password.trim() === ''
                || this.state.hasErrors
              }
            >
              Login
            </Button>
            <Link to="/register">register</Link>
          </div>
        </Box>
      </Form>
    )
  }
}

export default LoginForm
