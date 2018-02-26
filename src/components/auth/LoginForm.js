import React, { Component } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Box from '../../atoms/Box'
import Form from './Form'

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

  onInputBlur(e) {
    const errors = this.checkInputsForErrors()

    this.setState({ hasErrors: !!errors.length })
  }

  render() {
    return (
      <Box className="Component--LoginForm">
        <Form>
          <div className="input-group">
            <Input
              ref="username"
              type="text"
              placeholder="Username"
              onChange={e => this.onInputChange(e.target.value, 'username')}
              onBlur={e => this.onInputBlur(e)}
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
              onBlur={e => this.onInputBlur(e)}
              validate={e => {
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
              disabled={
                this.state.username.trim() === ''
                ||this.state.password.trim() === ''
                || this.state.hasErrors
              }
            >
              Login
            </Button>
            <p><Link to="/register">register</Link></p>
          </div>
        </Form>
      </Box>
    )
  }
}

export default LoginForm
