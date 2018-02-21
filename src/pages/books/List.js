import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BooksList from '../../components/books/BooksList'
import { requestBooks } from '../../actionCreators/books'

class List extends Component {
  componentDidMount() {
    this.props.requestBooks()
  }

  render() {
    return (
      <div className="Page--Books">
        <h1>Books list page</h1>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestBooks: () => {
      dispatch(requestBooks(ownProps.user))
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default withRouter(connected)
