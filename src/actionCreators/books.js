import { FETCH_BOOKS } from '../actions/books'

const fetchBooks = () => {
  return { type: FETCH_BOOKS, payload: null }
}

export {
  fetchBooks
}
