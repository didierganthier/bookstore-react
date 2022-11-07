import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import InputForm from '../components/InputForm';

const Books = () => {
  const books = useSelector((configureStore) => configureStore.book);

  const getVisibleBooks = (
    books,
    filter,
  ) => {
    switch (filter) {
      case 'SHOW_ALL':
        return books;
      case 'SHOW_COMPLETED':
        return books.filter(
          (book) => book.progress === 'read',
        );
      case 'SHOW_ACTIVE':
        return books.filter(
          (book) => !book.progress === 'read',
        );
      default:
        return books;
    }
  };

  const visibleBooks = getVisibleBooks(
    books,
    books.visibilityFilter,
  );

  return (
    <div>
      <ul>
        {visibleBooks.map((book) => (
          <Book
            id={book.id}
            key={book.toString()}
            title={book.title}
            author={book.author}
            progress={book.progress}
          />
        ))}
      </ul>
      <h1>Add new book</h1>
      <InputForm />
    </div>
  );
};

export default Books;
