import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import BooksForm from '../../components/books/BooksForm'
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

  render() {
    if (!this.props.bookToEdit) {
      return null
    }

    return (
      <PageContainer title={`Edit book "${this.props.bookToEdit.title}"`} className="Page--Books-add">
        <BooksForm
          user={this.props.user}
          onSubmit={this.onSubmit.bind(this)}
          history={this.props.history}
          book={this.props.bookToEdit}
        />
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
