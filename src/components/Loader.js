import React, { Component } from 'react'
import './Loader.css'

class Loader extends Component {
  componentWillMount() {
    document.body.classList.add('inactive')
  }

  componentWillUnmount() {
    document.body.classList.remove('inactive')
  }

  render() {
    return (
      <div className="Component--Loader">
        <h1 className="loader-text">Loading...</h1>
        <div className="overlay"></div>
      </div>
    )
  }
}

export default Loader
