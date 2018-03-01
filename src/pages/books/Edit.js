import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageContainer from '../../components/PageContainer'
import BooksForm from '../../components/books/BooksForm'
import { requestBook } from '../../actionCreators/bookToEdit'

class Edit extends Component {
  componentDidMount() {
    this.props.getBookToEdit(this.props.match.params.id)
  }

  render() {
    if (!this.props.bookToEdit) {
      return null
    }

    return (
      <PageContainer title={`Edit book '${this.props.bookToEdit.title}'`} className="Page--Books-add">
        <BooksForm
          user={this.props.user}
          onSubmit={() => console.log('submitting...')}
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
    editBook: () => console.warn('editing book...')
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)

export default connected
