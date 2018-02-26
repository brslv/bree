import React, { Component } from 'react'
import './RegisterForm.css'
import { Link } from 'react-router-dom'
import Box from '../../atoms/Box'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Form from './Form'

class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
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
        <Form>
          <div className="input-group">
            <Input
              ref="username"
              type="text"
              value={this.state.username}
              onChange={e => this.onInputChange(e.target.value, 'username')}
              onBlur={e => this.onInputBlur(e)}
              placeholder="Username"
              validate={e => {
                return e.target.value.trim() === '' ? 'Invalid username' : null
              }}
            />
          </div>

          <div className="input-group">
            <Input
              ref="email"
              type="email"
              value={this.state.email}
              onChange={e => this.onInputChange(e.target.value, 'email')}
              onBlur={e => this.onInputBlur(e)}
              placeholder="Email"
            />
          </div>

          <div className="input-group">
            <Input
              ref="emailAgain"
              type="email"
              onChange={e => this.onInputChange(e.target.value, 'emailAgain')}
              onBlur={e => this.onInputBlur(e)}
              validate={e => {
                if (e.target.value !== this.state.email) {
                  return `The email address doesn't match`
                }
              }}
              placeholder="Repeat Email"
            />
          </div>

          <div className="input-group">
            <Input
              ref="password"
              type="password"
              value={this.state.password}
              onChange={e => this.onInputChange(e.target.value, 'password')}
              onBlur={e => this.onInputBlur(e)}
              placeholder="Password"
              validate={e => {
                return e.target.value.trim() === '' ? 'Invalid password' : null
              }}
            />
          </div>

          <div className="buttons-container">
            <Button
              onClick={() => this.props.onSubmit({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
              }, this.clearRegisterForm.bind(this))}
              disabled={
                this.state.username.trim() === ''
                || this.state.email.trim() === ''
                || this.state.password.trim() === ''
                || this.state.hasErrors
              }
              type="button"
            >
              Register
            </Button>

            <div>
              <Link to="/login">login</Link>
            </div>
          </div>
        </Form>
      </Box>
    )
  }
}

export default RegisterForm
