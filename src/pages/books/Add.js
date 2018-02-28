import React, { Component } from 'react'
import { connect } from 'react-redux'
import BooksAddForm from '../../components/books/BooksAddForm'
import { addBook } from '../../actionCreators/books'

class Add extends Component {
  render() {
    return (
      <div className="Page--Books-add">
        <h1>Books Add page</h1>
        <BooksAddForm user={this.props.user} onSubmit={this.props.addBook} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (user, book) => dispatch(addBook(user, book))
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

export default connected
