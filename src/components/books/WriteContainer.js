import React, { Component } from 'react'
import Modal from '../../atoms/Modal'
import ChaptersBox from './ChaptersBox'
import AddChapterForm from './AddChapterForm'
import './WriteContainer.css'

class WriteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addChapterModalIsHidden: true
    }
  }

  openModal() {
    this.setState({ addChapterModalIsHidden: false })
  }

  closeModal(e) {
    this.setState({ addChapterModalIsHidden: true })
  }

  componentDidMount() {
    this.simpleMDE = new window.SimpleMDE({ element: document.querySelector('.chapter-content-editor') })
  }

  renderAddChapterModal() {
    return (
      <Modal
        onEsc={this.closeModal.bind(this)}
        onClose={this.closeModal.bind(this)}
      >
        <AddChapterForm onSubmit={(chapterData) => {
          this.props.onAddChapter({ title: chapterData.title }, this.props.book._id)
          this.closeModal()
        }} />
      </Modal>
    )
  }

  onDeleteChapter(e, id) {
    console.warn(`deleting chapter ${id}`)
  }

  render() {
    return (
      <div className="Component--WriteContainer">
        <textarea className="chapter-content-editor" ref="textarea" />

        <ChaptersBox
          chapters={this.props.chapters}
          onAddButtonClick={this.openModal.bind(this)}
          onDeleteButtonClick={this.onDeleteChapter.bind(this)}
        />

        {this.state.addChapterModalIsHidden ? null : this.renderAddChapterModal()}
      </div>
    )
  }
}

export default WriteContainer
