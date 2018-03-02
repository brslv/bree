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
    book = { ...book, id: this.props.bookToEdit._id }
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
    return (
      <PageContainer title={`Edit book`} className="Page--Books-add">
        {
          this.props.bookToEdit !== null
          ? <BooksForm
            user={this.props.user}
            onSubmit={this.onSubmit.bind(this)}
            history={this.props.history}
            book={this.props.bookToEdit}
          />
        : this.renderEmptyPageMessage()
        }
      </PageContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookToEdit: state.bookToEdit
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
