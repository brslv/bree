import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'
import { Link } from 'react-router-dom'
import {
  setConfirmation as _setConfirmation,
  unsetConfirmation as _unsetConfirmation
} from '../../actionCreators/confirmation'
import {deleteBook as _deleteBook } from '../../actionCreators/books'
import './Book.css'

class Book extends Component {
  onDelete(e, id) {
    this.props.setConfirmation('Are you sure you want to delete this book, braw?', (e, { confirmed }) => {
      if (confirmed) {
        this.props.deleteBook(id)
      } else {
        // canceled...
      }

      this.props.unsetConfirmation()
    })
  }

  render() {
    const {
      id,
      title,
      description
    } = this.props

    return (
      <Card className="Component--Book">
        <div className="header">
          <h3 className="title">{title}</h3>
          <span className="delete-button" onClick={e => this.onDelete(e, id)}>&times;</span>
        </div>
        <div className="content">{description}</div>
        <div className="footer">
          <div className="left">
            <Badge text="Draft" />
          </div>
          <div className="right">
            <Link to={`/books/${id}/edit/`}>
              <Button className="small stroke-only">Edit</Button>
            </Link> &nbsp;
            <Link to={`/books/${id}/write`}>
              <Button className="small">Write</Button>
            </Link>
          </div>
        </div>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setConfirmation: (text, onConfirm) => {
      dispatch(_setConfirmation(text, onConfirm))
    },
    unsetConfirmation: () => {
      dispatch(_unsetConfirmation())
    },
    deleteBook: (id) => {
      dispatch(_deleteBook(id, ownProps.user))
    }
  }
}

const connected = connect(
  null,
  mapDispatchToProps
)(Book)

export default connected
