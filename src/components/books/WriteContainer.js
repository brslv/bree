import React, { Component } from 'react'
import Button from '../../atoms/Button'
import Card from '../../atoms/Card'
import './WriteContainer.css'

class WriteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chaptersListIsHidden: true
    }
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  handleOutsideClick(e) {
    const chaptersListRef = this.refs.chaptersList
    const chaptesListButtonRef = this.refs.chaptersListButton

    if (
      !this.state.chaptersListIsHidden
      && chaptersListRef
      && !chaptersListRef.contains(e.target)
      && !chaptesListButtonRef.contains(e.target)
    ) {
      // Clicked outside of the chaptes-list and not the chapters-list-butotn
      this.setState({ chaptersListIsHidden: true })
    }
  }

  addChapterButtonClick(e) {
    console.warn('add chapter button - click')
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick)
    this.simpleMDE = new window.SimpleMDE({ element: document.querySelector('.chapter-content-editor') })
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  openChaptersList(e) {
    this.setState((prevState) => ({ chaptersListIsHidden: !prevState.chaptersListIsHidden }))
  }

  render() {
    return (
      <div className="Component--WriteContainer">
        <textarea className="chapter-content-editor" ref="textarea" />

        <div className="chapters-context-menu">
          <Card className={`chapters-list ${this.state.chaptersListIsHidden ? 'hidden' : ''}`}>
            <div ref="chaptersList">
              <div className="chapter">
                <div className="title">This is the first chapter...</div>
                <div className="controls">
                  <Button className="small stroke-only">Edit</Button>
                  <Button className="small">Write</Button>
                </div>
              </div>

              <div className="chapter active">
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

              <div className="add-button-wrapper">
                <Button className="add-button small" onClick={this.addChapterButtonClick.bind(this)}>Add</Button>
              </div>
            </div>
          </Card>

          <div ref="chaptersListButton" className="chapters-list-button" onClick={this.openChaptersList.bind(this)}>
            <span>☷</span>
          </div>
        </div>
      </div>
    )
  }
}

export default WriteContainer
