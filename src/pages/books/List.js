import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BooksList from '../../components/books/BooksList'
import PageContainer from '../../components/PageContainer'
import {
  setConfirmation,
  unsetConfirmation
} from '../../actionCreators/confirmation'
import {
  requestBooks,
  deleteBook
} from '../../actionCreators/books/list'
import './List.css'

class List extends Component {
  componentDidMount() {
    this.props.requestBooks()
  }

  onBookDelete(e, id) {
    this.props.setConfirmation('Are you sure you want to delete this book, braw?', (e, { confirmed }) => {
      if (confirmed) {
        this.props.deleteBook(id)
      } else {
        // canceled...
      }

      this.props.unsetConfirmation()
    })
  }

  render() {
    return (
      <PageContainer title="Books list" className="Page--Books-list">
        <BooksList
          books={this.props.books}
          onBookDelete={this.onBookDelete.bind(this)}
        />
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestBooks: () => {
      dispatch(requestBooks(ownProps.user))
    },
    setConfirmation: (text, onConfirm) => {
      dispatch(setConfirmation(text, onConfirm))
    },
    unsetConfirmation: () => {
      dispatch(unsetConfirmation())
    },
    deleteBook: (id) => {
      dispatch(deleteBook(id, ownProps.user))
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default withRouter(connected)
