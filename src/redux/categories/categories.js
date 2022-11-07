const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const STATUS = 'Under Construction';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return STATUS;
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducer;
