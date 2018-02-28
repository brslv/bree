import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BooksAddForm from '../../components/books/BooksAddForm'
import PageContainer from '../../components/PageContainer'
import { addBook } from '../../actionCreators/books'

class Add extends Component {
  render() {
    return (
      <PageContainer title="Add new book" className="Page--Books-add">
        <BooksAddForm
          user={this.props.user}
          onSubmit={this.props.addBook}
          history={this.props.history}
        />
      </PageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addBook: (user, book) => dispatch(addBook(
      user,
      book,
      ownProps.history
    ))
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

export default withRouter(connected)
