import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import AddBox from './AddBox'
import Button from '../../atoms/Button'
import './BooksList.css'

class BooksList extends Component {
  renderBooksList(books) {
    return books.map(book => {
      return <Book
        key={book._id}
        id={book._id}
        title={book.title}
        description={book.description}
        user={this.props.user}
      />
    })
  }

  render() {
    const { books } = this.props

    return (
      <div className="Component--BooksList">
        <AddBox />
        {
          Array.isArray(books) && books.length
            ? this.renderBooksList(books)
            : null
        }
      </div>
    )
  }
}

export default BooksList
