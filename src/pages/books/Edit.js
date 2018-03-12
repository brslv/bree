import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import BooksForm from '../../components/books/BooksForm'
import EmptyPageMessage from '../../atoms/EmptyPageMessage'
import {
  requestBook,
  editBook
} from '../../actionCreators/bookToEdit'

class Edit extends Component {
  componentDidMount() {
    this.props.getBookToEdit(this.props.match.params.id)
  }

  onSubmit(user, book) {
    book = { ...book, id: this.props.bookToEdit[0]._id }
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
    const bookToEdit = this.props.bookToEdit
    return (
      <PageContainer title="Edit" className="Page--Books-add">
        {
          Array.isArray(bookToEdit) && bookToEdit.length
          ? <BooksForm
            user={this.props.user}
            onSubmit={this.onSubmit.bind(this)}
            history={this.props.history}
            book={bookToEdit[0]}
          />
        : Array.isArray(bookToEdit) && !bookToEdit.length
          ? this.renderEmptyPageMessage()
          : null
        }
      </PageContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookToEdit: state.books.bookToEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBookToEdit: (id) => dispatch(requestBook(id, ownProps.user)),
    editBook: (bookData, history, user) => dispatch(editBook(bookData, history, user))
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)

export default withRouter(connected)
