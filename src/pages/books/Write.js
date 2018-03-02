import React, { Component } from 'react'
import PageContainer from '../../components/PageContainer'
import './Write.css'

class Write extends Component {
  render() {
    return (
      <PageContainer title={`Write {book.title}`}>
        <div className="Page--BooksWrite">
          Write...
        </div>
      </PageContainer>
    )
  }
}

export default Write
