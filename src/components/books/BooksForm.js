import React, { Component } from 'react'
import Form from '../../atoms/Form'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Box from '../../atoms/Box'
import './BooksForm.css'

class BooksForm extends Component {
  constructor(props) {
    super(props)

    let bookToEdit = {}
    if (props.book) {
      bookToEdit = {
        title: props.book.title,
        description: props.book.description,
      }
    }

    this.state = {
      title: bookToEdit.title || '',
      description: bookToEdit.description || '',
      hasErrors: ''
    }
  }

  checkInputsForErrors() {
    const errors = []

    for (let key in this.refs) {
      const error = this.refs[key].state.error

      if (error) {
        errors.push(error)
      }
    }

    return errors
  }

  onInputChange(value, name) {
    const errors = this.checkInputsForErrors()

    this.setState({
      [name]: value,
      hasErrors: !!errors.length
    })
  }

  onSubmit(e) {
    this.props.onSubmit(this.props.user, {
      title: this.state.title,
      description: this.state.description
    })
    // TODO: dispatch books submit action
  }

  render() {
    return (
      <Form className="Component--BooksForm">
        <Box>
          <div className="form-items">
            <div className="input-group">
              <Input
                ref="title"
                type="text"
                value={this.state.title}
                placeholder="Book title"
                validate={e => {
                  if (e.target.value.trim() === '') {
                    return 'Title is required'
                  }
                }}
                onChange={e => this.onInputChange(e.target.value, 'title')}
              />
            </div>

            <div className="input-group">
              <Input
                ref="description"
                type="text"
                value={this.state.description}
                placeholder="Short description"
                validate={e => {
                  if (e.target.value.trim() === '') {
                    return 'Description is required'
                  }
                }}
                onChange={e => this.onInputChange(e.target.value, 'description')}
              />
            </div>
          </div>

          <div className="form-controls">
            <Button
              onClick={this.onSubmit.bind(this)}
              disabled={
                this.state.title.trim === ''
                || this.state.description.trim() === ''
                || this.state.hasErrors
              }
            >
              Submit
            </Button>
          </div>
        </Box>
      </Form>
    )
  }
}

export default BooksForm
