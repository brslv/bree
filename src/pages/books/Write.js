import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageContainer from '../../components/PageContainer'
import EmptyPageMessage from '../../atoms/EmptyPageMessage'
import { requestBook } from '../../actionCreators/bookToWrite'
import './Write.css'

class Write extends Component {
  componentDidMount() {
    this.props.getBookToWrite()
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

    return (
      <PageContainer title="Write">
        {
          Array.isArray(bookToWrite) && bookToWrite.length
          ? <div className="Page--BooksWrite">
              Write... {this.props.bookToWrite[0].title}
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
    bookToWrite: state.bookToWrite
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBookToWrite: () => dispatch(requestBook(ownProps.match.params.id, ownProps.user)),
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Write)

export default connected
