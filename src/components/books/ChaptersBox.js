import React, { Component } from 'react'
import Button from '../../atoms/Button'
import Card from '../../atoms/Card'
import './ChaptersBox.css'

class ChaptersBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chaptersListIsHidden: true
    }

    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  openChaptersList(e) {
    this.setState((prevState) => ({ chaptersListIsHidden: !prevState.chaptersListIsHidden }))
  }

  addChapterButtonClick(e) {
    this.setState({ chaptersListIsHidden: true }, () => {
      if (this.props.onAdd) {
        this.props.onAdd(e)
      }
    })
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

  renderChapter(title) {
    return (
      <div className="chapter">
        <div className="title">{title}</div>
        <div className="controls">
          <Button className="small stroke-only">Edit</Button>
          <Button className="small">Write</Button>
          <span className="delete-chapter">&times;</span>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div className="Component--ChaptersBox">
        <div className="chapters-context-menu">
          <Card className={`chapters-list ${this.state.chaptersListIsHidden ? 'hidden' : ''}`}>
            <div ref="chaptersList">
              {this.renderChapter('First chapter')}
              {this.renderChapter('Second chapter')}

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

export default ChaptersBox
