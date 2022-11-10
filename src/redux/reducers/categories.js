const initialState = 'Under Construction ';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return `${state}!`;
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: 'CHECK_STATUS' });

export default categoriesReducer;
