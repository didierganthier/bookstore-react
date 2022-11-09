import { ADD_BOOK, DELETE_BOOK, LIST_BOOK } from '../actions/types';

const initialState = [];

function bookReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case LIST_BOOK:
      return payload;
    case DELETE_BOOK:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
}
export default bookReducer;
