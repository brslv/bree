import React, { Component } from 'react'
import './WriteContainer.css'

class WriteContainer extends Component {
  componentDidMount() {
    this.simpleMDE = new window.SimpleMDE({ element: document.querySelector('.test') })
  }

  render() {
    return (
      <div className="Component--WriteContainer">
        <div className="left">
          Chapters
        </div>

        <div className="right">
          <textarea className="test" ref="textarea" />
        </div>
      </div>
    )
  }
}

export default WriteContainer
