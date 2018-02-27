import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Navigation.css'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: true
    }
  }

  show() {
    this.setState({ hidden: false })
  }

  hide() {
    this.setState({ hidden: true })
  }

  render() {
    let className = `Component--Navigation`
    if (this.state.hidden) {
      className += ' hidden'
    }

    return (
      <div
        className={className}
        onMouseLeave={this.hide.bind(this)}
      >
        <div
          className="hamburger"
          onClick={this.show.bind(this)}
          onMouseEnter={this.show.bind(this)}
        >
          ☰
        </div>
        <ul className="list">
          <Link to="/"><li>Home</li></Link>
          <Link to="/books"><li>List Books</li></Link>
          <Link to="/books/add"><li>Add new book</li></Link>
        </ul>
        <div className="user-info">
          Logged in as: {this.props.username}
          <Button className="logout-button stroke-only small" onClick={this.props.onLogout}>Logout</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation)
