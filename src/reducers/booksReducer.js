import { FETCH_BOOKS } from '../actions/books'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS: {
      return [
        {id: 'book1', title: 'Book 1', description: 'Book 1 description'},
        {id: 'book2', title: 'Book 2', description: 'Book 2 description'},
        {id: 'book3', title: 'Book 3', description: 'Book 3 description'}
      ]
    }
    default: return state
  }
}
