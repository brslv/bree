import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BooksList from '../../components/books/BooksList'
import { requestBooks } from '../../actionCreators/books'
import PageContainer from '../../components/PageContainer'
import './List.css'

class List extends Component {
  componentDidMount() {
    this.props.requestBooks()
  }

  render() {
    return (
      <PageContainer title="Books list" className="Page--Books-list">
        <BooksList user={this.props.user} books={this.props.books} />
      </PageContainer>
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
