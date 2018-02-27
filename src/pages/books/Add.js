import React, { Component } from 'react'
import BooksAddForm from '../../components/books/BooksAddForm'

class Add extends Component {
  render() {
    return (
      <div className="Page--Books-add">
        <h1>Books Add page</h1>
        <BooksAddForm />
      </div>
    );
  }
}

export default Add
