import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InputForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title,
      author,
      progress: 'currently reading',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={(e) => addBook(e)}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <button type="submit" onClick={(e) => submitAddBook(e)}>Add</button>
    </form>
  );
};

export default InputForm;
