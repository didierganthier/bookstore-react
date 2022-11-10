import { combineReducers } from 'redux';
import books from './books';
import categories from './categories';

export default combineReducers({
  books,
  categories,
});
