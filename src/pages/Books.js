import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import InputForm from '../components/InputForm';
import { listAllBooks } from '../redux/actions/books';

const Books = () => {
  const books = useSelector((state) => state.rootReducer.books);
  const dispatch = useDispatch();

  const getAllBooks = () => {
    dispatch(listAllBooks());
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const [filter, setFilter] = useState('All');

  const filterOptions = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Learning' },
    { id: 3, name: 'Philosophy' },
    { id: 4, name: 'Religion' },
  ];

  return (
    <div>
      <ul className="filters">
        {filterOptions.map((option) => (
          <button
            type="button"
            onClick={() => {
              setFilter(option.name);
            }}
            key={option.id}
            style={{ backgroundColor: filter === option.name ? 'blue' : 'white', color: filter === option.name ? 'white' : 'black' }}
          >
            {option.name}

          </button>
        ))}
      </ul>
      <ul>
        {/* Filter books where categories contain current filter */}
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
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
