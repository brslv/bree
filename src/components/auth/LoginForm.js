import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className="Component--LoginForm">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <div>
        <p><Link to="/register">register</Link></p>
      </div>
    </div>
  )
}

export default LoginForm
