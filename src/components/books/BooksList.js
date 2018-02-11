import React, { Component } from 'react'
import Book from './Book'

class BooksList extends Component {
  render() {
    return (
      <div className="Component--BooksList">
        {this.props.books.map(book => {
          return <Book key={book.id} title={book.title} description={book.description} />
        })}
      </div>
    )
  }
}

export default BooksList
