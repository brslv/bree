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
        <div className="container">
          <span class="loader"><span class="loader-inner"></span></span>
        </div>
        <div className="overlay"></div>
      </div>
    )
  }
}

export default Loader
