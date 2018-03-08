import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageContainer from '../../components/PageContainer'
import EmptyPageMessage from '../../atoms/EmptyPageMessage'
import { requestBook } from '../../actionCreators/bookToWrite'
import WriteContainer from '../../components/books/WriteContainer'
import './Write.css'
import {
  requestChapters,
  addChapter
} from '../../actionCreators/chapters';

class Write extends Component {
  componentDidMount() {
    this.props.getBookToWrite()
    this.props.getChapters()
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
    const bookToWrite = this.props.bookToWrite
    const chapters = this.props.chapters

    return (
      <PageContainer title="Write">
        {
          Array.isArray(bookToWrite) && bookToWrite.length
          ? <div className="Page--BooksWrite">
              <WriteContainer
                book={bookToWrite[0]}
                chapters={chapters}
                onAddChapter={this.props.addChapter}
              />
            </div>
          : Array.isArray(bookToWrite) && !bookToWrite.length
            ? this.renderEmptyPageMessage()
            : null
        }
      </PageContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookToWrite: state.bookToWrite,
    chapters: state.chapters
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBookToWrite: () => dispatch(requestBook(ownProps.match.params.id, ownProps.user)),
    getChapters: () => dispatch(requestChapters(ownProps.match.params.id, ownProps.user)),
    addChapter: ({ title, content }, bookId) => dispatch(addChapter({ title, content}, bookId, ownProps.user))
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Write)

export default connected
