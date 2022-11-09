import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import bookReducer from './books/books';
// import categoriesReducer from './categories/categories';

const initialState = {};
const middleware = [thunk];

export default configureStore(
  {
    reducer: {
      rootReducer,
    },
  },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
