import React, { Component } from 'react'
import Button from './Button'
import Card from './Card'
import './Confirmation.css'

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.escapeKeyListener = this.escapeKeyListener.bind(this)
  }

  onClick(e) {
    if (e.target.classList.contains('wrapper')) {
      this.props.onConfirm(e, { confirmed: false })
    }
  }

  escapeKeyListener(e) {
    if (e.keyCode === 27) {
      this.props.onConfirm(e, { confirmed: false })
    } else if (e.keyCode === 13) {
      this.props.onConfirm(e, { confirmed: true })
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.escapeKeyListener)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.escapeKeyListener)
  }

  render() {
    return (
      <div className="Atom--Confirmation">
        <div className="wrapper" onClick={this.onClick.bind(this)}>
          <Card className="container">
            <div className="content">
              {this.props.children}
            </div>

            <div className="controls">
              <Button
                onClick={e => this.props.onConfirm(e, { confirmed: false })}
                className="small stroke-only"
              >
                Cancel
              </Button>

              &nbsp;

              <Button
                onClick={e => this.props.onConfirm(e, { confirmed: true })}
                className="small"
              >
                Sure, do it
              </Button>
            </div>
          </Card>
        </div>
        <div className="overlay" onClick={this.onClick.bind(this)}></div>
      </div>
    )
  }
}

export default Confirmation
