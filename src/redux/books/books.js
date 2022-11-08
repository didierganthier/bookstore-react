const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const TOGGLE_BOOK = 'bookstore/books/TOGGLE_BOOK';
const initialState = [
  {
    id: '1',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    progress: 'read',
    categories: ['All', 'Learning'],
  },
  {
    id: '2',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    progress: 'currently reading',
    categories: ['All', 'Learning'],
  },
  {
    id: '3',
    title: 'The Prophet',
    author: 'Kahlil Gibran',
    progress: 'currently reading',
    categories: ['All', 'Philosophy'],
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case TOGGLE_BOOK:
      return state.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            progress: book.progress === 'read' ? 'currently reading' : 'read',
          };
        }
        return book;
      });
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.payload);
    default: return state;
  }
};
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const toggleBook = (id) => ({
  type: TOGGLE_BOOK,
  payload: id,
});

const visibilityFilter = (
  state = 'SHOW_ALL',
  action,
) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default bookReducer;
export {
  addBook, removeBook, toggleBook, visibilityFilter,
};
