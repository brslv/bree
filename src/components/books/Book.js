import React, { Component } from 'react'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'
import { Link } from 'react-router-dom'
import './Book.css'

class Book extends Component {
  onDelete(e) {
    console.warn('deleting book...displaying confirmation modal')
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
          <span className="delete-button" onClick={this.onDelete.bind(this)}>&times;</span>
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
            <Button className="small">Write</Button>
          </div>
        </div>
      </Card>
    )
  }
}

export default Book
