import React from 'react'
import { withRouter } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ onLogout }) => {
  return (
    <div className="Component--Navigation">
      <ul>
        <li><button onClick={onLogout}>Logout</button></li>
        <li>Home</li>
        <li>Test</li>
      </ul>
    </div>
  )
}

export default withRouter(Navigation)
