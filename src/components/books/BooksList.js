import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import Button from '../../atoms/Button'
import EmptyPageMessage from '../../atoms/EmptyPageMessage'
import './BooksList.css'

class BooksList extends Component {
  renderEmptyPageMessage() {
    return (
      <EmptyPageMessage style={{ textAlign: 'center' }}>
        <h1>
          You don't have any books yet <span role='img' aria-label='sad-face'>😲</span>
        </h1>
        <Link to="/books/add"><Button>Create your first book</Button></Link>
      </EmptyPageMessage>
    )
  }

  renderBooksList(books) {
    return books.map(book => {
      return <Book key={book._id} title={book.title} description={book.description} />
    })
  }

  render() {
    const { books } = this.props

    return (
      <div className="Component--BooksList">
        {
          Array.isArray(books) && books.length
            ? this.renderBooksList(books)
            : Array.isArray(books) && !books.length
              ? this.renderEmptyPageMessage()
              : null
        }
      </div>
    )
  }
}

export default BooksList
