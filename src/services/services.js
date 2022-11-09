import http from './baseApi';

const getAll = () => http.get('/books');

const create = (data) => http.post('/books', data);

const remove = (id) => http.delete(`/books/${id}`);

const bookService = {
  getAll,
  create,
  remove,
};

export default bookService;
