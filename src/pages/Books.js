import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import InputForm from '../components/InputForm';
import NoBook from '../components/NoBook';
import { getBooks } from '../redux/actions/books';

const Books = () => {
  const books = useSelector((state) => state.rootReducer.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const [filter, setFilter] = useState('All');

  const filterOptions = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Learning' },
    { id: 3, name: 'Philosophy' },
    { id: 4, name: 'Religion' },
  ];

  return (
    <div className="mt-[120px] mx-[200px]">
      <ul className="filters">
        {filterOptions.map((option) => (
          <button
            type="button"
            onClick={() => {
              setFilter(option.name);
            }}
            key={option.id}
            className={`${filter === option.name ? 'bg-[#54B4FF]' : 'bg-[#E8E8E8] text-black'} rounded-[10px] text-[#fff] text-[14px] font-bold py-[10px] px-[20px] mr-[10px]`}
          >
            {option.name}

          </button>
        ))}
      </ul>
      <ul>
        {books.length === 0 && <NoBook />}
        {books.length > 0 && filter === 'All' && books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            randomNum={Math.floor(Math.random() * 100)}
          />
        ))}
        {books.length > 0 && filter !== 'All' && books.filter((book) => book.category === filter).map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            randomNum={Math.floor(Math.random() * 100)}
          />
        ))}
        {books.length > 0 && filter !== 'All' && books.filter((book) => book.category === filter).length === 0 && <NoBook />}
      </ul>
      <hr className="my-10" />
      <h1 className="text-3xl text-[#8A8A8A] font-bold uppercase mb-2">Add new book</h1>
      <InputForm />
    </div>
  );
};

export default Books;
