import React, { Component } from 'react'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import Form from '../../atoms/Form'

class AddChapterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      hasErrors: false
    }
  }

  componentDidMount() {
    this.refs.title.refs.el.focus()
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

  render() {
    return(
      <Form>
        <div className="form-items">
          <div className="input-group">
            <Input
              ref="title"
              type="text"
              onChange={e => this.onInputChange(e.target.value, 'title')}
              validate={e => e.target.value === '' ? "Title cannot be empty" : null}
              placeholder="Chapter title"
            />
          </div>
        </div>

        <div className="form-controls">
          <Button
            disabled={this.state.title === '' || this.state.hasErrors}
          >Submit</Button>
        </div>
      </Form>
    )
  }
}

export default AddChapterForm
