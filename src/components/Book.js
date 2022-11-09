/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/books';

const Book = (props) => {
  const {
    id, title, author, progress,
  } = props;
  const dispatch = useDispatch();

  const removeBookwithId = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <li key={id}>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{progress}</h3>
      <button type="button" onClick={() => dispatch(removeBookwithId(id))}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default Book;
