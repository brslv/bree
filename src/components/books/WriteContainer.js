import React, { Component } from 'react'
import SimpleMDE from '../../libs/simplemde/src/js/simplemde'
import '../../libs/codemirror/codemirror.css'
import '../../libs/simplemde/src/css/simplemde.css'
import './WriteContainer.css'

class WriteContainer extends Component {
  componentDidMount() {
    this.simpleMDE = new SimpleMDE({ element: document.querySelector('.test') })
  }

  shouldComponentUpdate() {
    return false;
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
