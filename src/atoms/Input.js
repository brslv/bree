import React, { Component } from 'react'
import './Input.css'
import { validateEmail } from '../utils/helpers'
import InputError from './InputError'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  onBlur(e) {
    const error = this.props.validate
      ? this.props.validate(e)
      : this.validateByInputType(e)

    this.setState({ error }, () => {
      this.props.onBlur && this.props.onBlur(e)
    })
  }

  validateByInputType(e) {
    if (this.props.type === 'email') {
      return !validateEmail(e.target.value)
        ? 'Invalid email'
        : null
    }

    // other types
  }

  render() {
    let inputProps = {...this.props}
    let classNames = `Atom--Input`

    if (this.props.className) {
       classNames += ` ${this.props.className}`
    }

    if (inputProps.validate) {
      // remove the validate prop, because react's native input element
      // doesnt understand the validate prop

      // to use the validate prop => provide a function that returns either an error message
      // or null, if the validation has passed
      delete inputProps['validate']
    }

    return (
      <React.Fragment>
        <input
          {...inputProps}
          onBlur={this.onBlur.bind(this)}
          className={classNames}
        />
        {this.state.error ? <InputError content={this.state.error} /> : ''}
      </React.Fragment>
    )
  }
}

export default Input
