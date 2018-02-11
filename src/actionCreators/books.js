import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS
} from '../actions/books'

const requestBooks = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_BOOKS })

    return new Promise((resolve, reject) => { // simulate request
      setTimeout(() => {
        const books = [ // should be fetched from the database
          {id: 'book1', title: 'Book 1', description: 'Book 1 description'},
          {id: 'book2', title: 'Book 2', description: 'Book 2 description'},
          {id: 'book3', title: 'Book 3', description: 'Book 3 description'}
        ]

        resolve(dispatch({
          type: RECEIVE_BOOKS,
          payload: { books }
        }))
      }, 1000)
    })
  }
}

export {
  requestBooks
}
