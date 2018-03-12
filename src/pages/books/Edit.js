import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import BooksForm from '../../components/books/BooksForm'
import EmptyPageMessage from '../../atoms/EmptyPageMessage'
import {
  requestBook,
  editBook
} from '../../actionCreators/currentlyEditing'

class Edit extends Component {
  componentDidMount() {
    this.props.getCurrentlyEditingBook(this.props.match.params.id)
  }

  onSubmit(user, book) {
    book = { ...book, id: this.props.book[0]._id }
    this.props.editBook(book, this.props.history, user)
  }

  renderEmptyPageMessage() {
    return (
      <EmptyPageMessage>
        <h2 style={{ textAlign: 'center' }}>
          The book doesn't exist. <span role="img" aria-label="Sad face">😔</span>
        </h2>
      </EmptyPageMessage>
    )
  }

  render() {
    const book = this.props.book
    return (
      <PageContainer title="Edit" className="Page--Books-add">
        {
          Array.isArray(book) && book.length
          ? <BooksForm
            user={this.props.user}
            onSubmit={this.onSubmit.bind(this)}
            history={this.props.history}
            book={book[0]}
          />
        : Array.isArray(book) && !book.length
          ? this.renderEmptyPageMessage()
          : null
        }
      </PageContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books.currentlyEditing
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentlyEditingBook: (id) => dispatch(requestBook(id, ownProps.user)),
    editBook: (bookData, history, user) => dispatch(editBook(bookData, history, user))
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)

export default withRouter(connected)
