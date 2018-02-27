import React, { Component } from 'react'
import Form from '../../atoms/Form'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Box from '../../atoms/Box'

class BooksAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
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
    // TODO: dispatch books submit action
  }

  render() {
    return (
      <Box className="Component--BooksAddForm">
        <Form>
          <div className="input-group">
            <Input
              ref="title"
              type="text"
              placeholder="Title"
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
              placeholder="Description"
              validate={e => {
                if (e.target.value.trim() === '') {
                  return 'Description is required'
                }
              }}
              onChange={e => this.onInputChange(e.target.value, 'description')}
            />
          </div>

          <div className="buttons-container">
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
        </Form>
      </Box>
    )
  }
}

export default BooksAddForm
