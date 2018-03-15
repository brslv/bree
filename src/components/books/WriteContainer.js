import React, { Component } from 'react'
import Modal from '../../atoms/Modal'
import ChaptersBox from './ChaptersBox'
import AddChapterForm from './AddChapterForm'
import './WriteContainer.css'

class WriteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addChapterModalIsHidden: true,
      editChapterModalIsHidden: true,
    }
  }

  openAddModal() {
    this.setState({ addChapterModalIsHidden: false })
  }

  closeAddModal(e) {
    this.setState({ addChapterModalIsHidden: true })
  }

  componentDidMount() {
    this.simpleMDE = new window.SimpleMDE({ element: document.querySelector('.chapter-content-editor') })
  }

  onDeleteChapter(e, id) {
    this.props.onDeleteChapter(id)
  }

  onChapterEditButtonClick(e, id) {
    if (this.props.onChapterEditButtonClick) {
      this.props.onChapterEditButtonClick(e, id)
    }
  }

  renderAddChapterModal() {
    return (
      <Modal
        onEsc={this.closeAddModal.bind(this)}
        onClose={this.closeAddModal.bind(this)}
      >
        <AddChapterForm onSubmit={(chapterData) => {
          this.props.onAddChapter({ title: chapterData.title }, this.props.book._id)
          this.closeAddModal()
        }} />
      </Modal>
    )
  }

  renderEditChapterModal(chapter) {
    if (!chapter) {
      return null
    }

    return (
      <Modal
        onEsc={this.props.closeEditChapterModal}
        onClose={this.props.closeEditChapterModal}
      >
        {chapter[0].title}
      </Modal>
    )
  }

  render() {
    return (
      <div className="Component--WriteContainer">
        <textarea className="chapter-content-editor" ref="textarea" />

        <ChaptersBox
          chapters={this.props.chapters}
          onAddButtonClick={this.openAddModal.bind(this)}
          onDeleteButtonClick={this.onDeleteChapter.bind(this)}
          onEditButtonClick={this.onChapterEditButtonClick.bind(this)}
        />

        {this.state.addChapterModalIsHidden ? null : this.renderAddChapterModal()}
        {!this.props.editModalVisibility ? null : this.renderEditChapterModal(this.props.currentlyEditingChapter)}
      </div>
    )
  }
}

export default WriteContainer
