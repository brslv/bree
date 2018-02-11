import React, { Component } from 'react'
import { connect } from 'react-redux'
import BooksList from '../components/BooksList'
import { requestBooks } from '../actionCreators/books'

class Books extends Component {
  componentWillMount() {
    this.props.requestBooks()
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
    requestBooks: () => {
      dispatch(requestBooks())
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);

export default connected
