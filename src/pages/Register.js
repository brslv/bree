import React, { Component } from 'react'
import './Register.css'
import RegisterForm from '../components/auth/RegisterForm'
import { register } from '../actionCreators/user'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Register extends Component {
  onSubmit(data, clearRegisterForm) {
    this.props.register(data, clearRegisterForm)
  }

  render() {
    return (
      <div className="Page--Register">
        <h1>Register page</h1>
        <RegisterForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (data, clearRegisterForm) => {
      dispatch(register(data, clearRegisterForm))
    }
  }
}

const connected = connect(
  null,
  mapDispatchToProps
)(Register)

export default withRouter(connected)
