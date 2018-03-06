import React, { Component } from 'react'
import Card from './Card'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp)
  }

  onKeyUp(e) {
    if (e.keyCode === 27) {
      if (this.props.onEsc) {
        this.props.onEsc()
      }
    }
  }

  onCloseButtonClick(e) {
    this.close(e)
  }

  onOverlayClick(e) {
    this.close(e)
  }

  close(e) {
    if (this.props.onClose) {
      this.props.onClose(e)
    }
  }

  render() {
    return (
      <div className="Atom--Modal">
        <Card className="content">
          <div className="close-button-container">
            <span onClick={this.onCloseButtonClick.bind(this)}>&times;</span>
          </div>

          {this.props.children}
        </Card>

        <div className="overlay" onClick={this.onOverlayClick.bind(this)}></div>
      </div>
    )
  }
}

export default Modal
