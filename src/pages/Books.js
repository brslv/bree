import React, { Component } from 'react'
import { connect } from 'react-redux'
import BooksList from '../components/BooksList'
import { fetchBooks } from '../actionCreators/books'

class Books extends Component {
  componentWillMount() {
    this.props.fetchBooks()
  }
  render() {
    return (
      <div className="Page--Books">
        <h1>Books page</h1>
        <BooksList books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => {
      dispatch(fetchBooks())
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);

export default connected
