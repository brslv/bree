import React, { Component } from 'react'
import './WriteContainer.css'

class WriteContainer extends Component {
  render() {
    return (
      <div className="Component--WriteContainer">
        <div className="left">
          Chapters
        </div>

        <div className="right">
          Content
        </div>

        <div className="right">
          Parsed content...
        </div>
      </div>
    )
  }
}

export default WriteContainer
