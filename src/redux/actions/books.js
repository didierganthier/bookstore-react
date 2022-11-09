import { ADD_BOOK, DELETE_BOOK, LIST_BOOK } from './types';
import bookService from '../../services/services';

/* eslint-disable camelcase */
export const createBook = (item_id, title, author, category) => async (dispatch) => {
  try {
    const res = await bookService.create({
      item_id, title, author, category,
    });
    dispatch({
      type: ADD_BOOK,
      payload: ({
        item_id, title, author, category,
      }),
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const listAllBooks = () => async (dispatch) => {
  try {
    const res = await bookService.getAll();
    const payLoad = Object.keys(res.data).map((valu) => ({
      item_id: valu,
      ...res.data[valu][0],
    }));
    dispatch({
      type: LIST_BOOK,
      payload: payLoad,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await bookService.remove(id);
    dispatch({
      type: DELETE_BOOK,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
