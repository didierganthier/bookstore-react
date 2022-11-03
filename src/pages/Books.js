import React, { useState } from 'react'
import Book from '../components/Book'
import InputForm from '../components/InputForm';

const Books = () => {
  
  const [books, setBooks] = useState([]);

  return (
    <div>
      <ul>
        {books.map((book, index) => {
          return <Book key={index} title={book.title} author={book.author} />
        })}
      </ul>
      <h1>Add new book</h1>
      <InputForm books={books} setBooks={setBooks}/>
    </div>
  )
}

export default Books
