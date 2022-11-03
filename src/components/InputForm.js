import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputForm = (props) => {
  const { setBooks, books } = props;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  return (
    <form onSubmit={(e) => addBook(e)}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <button type="submit" onClick={(e) => addBook(e)}>Add</button>
    </form>
  );
};

InputForm.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default InputForm;
