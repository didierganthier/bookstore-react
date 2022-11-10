import React from 'react';
import book from '../assets/book.png';

const NoBook = () => (
  <div className="items-center mx-auto my-20">
    <h1 className="text-3xl font-bold">No such book</h1>
    <img src={book} className="w-[300px] h-[300px] my-5" alt="No books" />
    <h2 className="text-xl font-light">Please add a book</h2>
    <div className="mt-5">
      <div className="w-10 h-10 bg-[#54B4FF] rounded-full animate-bounce flex items-center justify-center outer">
        <svg className="p-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </div>
  </div>
);

export default NoBook;
