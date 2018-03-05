import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './WriteContainer.css'

class WriteContainer extends Component {
  componentDidMount() {
    this.simpleMDE = new window.SimpleMDE({ element: document.querySelector('.chapter-content-editor') })
  }

  render() {
    return (
      <div className="Component--WriteContainer">
        <div className="left">
          <h2>Chapters</h2>
          <ol className="chapters-list">
            <li className="chapter"><Link to="/">Chapter 1 - Intro</Link></li>
            <li className="chapter"><Link to="/">Chapter 1 - Something</Link></li>
            <li className="chapter"><Link to="/">Chapter 1 - Something more!</Link></li>
          </ol>
        </div>

        <div className="right">
          <textarea className="chapter-content-editor" ref="textarea" />
        </div>
      </div>
    )
  }
}

export default WriteContainer
