import React, { Component } from 'react'
import Button from '../../atoms/Button'
import './WriteContainer.css'

class WriteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chaptersListIsHidden: true
    }
  }

  componentDidMount() {
    this.simpleMDE = new window.SimpleMDE({ element: document.querySelector('.chapter-content-editor') })
  }

  openChaptersList(e) {
    this.setState((prevState) => ({ chaptersListIsHidden: !prevState.chaptersListIsHidden }))
  }

  render() {
    return (
      <div className="Component--WriteContainer">
        <textarea className="chapter-content-editor" ref="textarea" />
        <div className="chapters-context-menu">
          <div ref="chaptersList" className={`chapters-list ${this.state.chaptersListIsHidden ? 'hidden' : ''}`}>
            <div className="chapter">
              <div className="title">This is the first chapter...</div>
              <div className="controls">
                <Button className="small stroke-only">Edit</Button>
                <Button className="small">Write</Button>
              </div>
            </div>

            <div className="chapter">
              <div className="title">This is the first chapter...</div>
              <div className="controls">
                <Button className="small stroke-only">Edit</Button>
                <Button className="small">Write</Button>
              </div>
            </div>

            <div className="chapter">
              <div className="title">This is the first chapter and this is my second chapter here...it's a long long chapter, you know....</div>
              <div className="controls">
                <Button className="small stroke-only">Edit</Button>
                <Button className="small">Write</Button>
              </div>
            </div>
          </div>

          <div className="chapters-list-button" onClick={this.openChaptersList.bind(this)}>
            <span>☷</span>
          </div>
        </div>
      </div>
    )
  }
}

export default WriteContainer
