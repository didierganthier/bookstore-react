/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, toggleBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author, progress,
  } = props;
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <input checked={progress === 'read'} type="checkbox" onClick={() => dispatch(toggleBook(id))} />
      <h3>{progress}</h3>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
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
