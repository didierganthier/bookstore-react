import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import InputForm from '../components/InputForm';

const Books = () => {
  const books = useSelector((configureStore) => configureStore.book);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            id={book.id}
            key={book.toString()}
            title={book.title}
            author={book.author}
            progress={book.progress}
          />
        ))}
      </ul>
      <ul className="books">
        <li>Read</li>
        <li>Currently Reading</li>
        <li>Want to Read</li>
      </ul>
      <h1>Add new book</h1>
      <InputForm />
    </div>
  );
};

export default Books;
