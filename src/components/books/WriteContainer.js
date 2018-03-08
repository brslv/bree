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
        <AddChapterForm />
      </Modal>
    )
  }

  render() {
    return (
      <div className="Component--WriteContainer">
        <textarea className="chapter-content-editor" ref="textarea" />

        <ChaptersBox
          onAddButtonClick={this.openModal.bind(this)}
        />

        {this.state.addChapterModalIsHidden ? null : this.renderAddChapterModal()}
      </div>
    )
  }
}

export default WriteContainer
