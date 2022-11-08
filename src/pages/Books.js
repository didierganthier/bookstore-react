import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import InputForm from '../components/InputForm';

const Books = () => {
  const books = useSelector((configureStore) => configureStore.book);

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
        {books.filter((book) => book.categories.includes(filter)).map((book) => (
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
