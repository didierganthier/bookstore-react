/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/books';

const Book = (props) => {
  const {
    id, title, author, category, randomNum,
  } = props;
  const dispatch = useDispatch();

  const removeBookwithId = (id) => {
    dispatch(deleteBook(id));
  };

  const [progress, setProgress] = useState(randomNum);

  const strokeDashoffset = 472 - (472 * progress) / 100;

  const style = {
    backgroundColor: `hsl(${randomNum}, 100%, 80%)`,
    strokeWidth: '20px',
    strokeDasharray: '472',
    strokeDashoffset: `${strokeDashoffset}`,
  };

  return (
    <li key={id} className="border my-5 p-5 flex rounded outer">
      <div className="w-2/3">
        <h3 className="text-[#8A8A8A] font-bold">{category}</h3>
        <h1 className="text-3xl font-semibold my-2">{title}</h1>
        <h2 className="text-[#54B4FF] mb-5 font-light">{author}</h2>
        <button className="text-[#54B4FF] font-light hover:text-red-400" type="button" onClick={() => dispatch(removeBookwithId(id))}>Remove</button>
      </div>
      <div className="w-[160px] h-[160px] relative">
        <div className="w-[160px] h-[160px] rounded-[50%] p-5 outer">
          <div className="w-[120px] h-[120px] rounded-[50%] border flex items-center justify-center inner">
            <div className="font-bold">
              {progress}
              %
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#54B4FF" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle style={style} cx="80" cy="80" r="70" strokeLinecap="round" />
        </svg>
      </div>
      <div className="w-[1px] h-[150px] bg-[#E8E8E8] mx-10" />
      <div className="">
        <h3 className="text-[#8A8A8A] font-light">Current Chapter</h3>
        <h1 className="text-xl font-light my-8">
          Chapter
          {' '}
          {randomNum}
        </h1>
        <button className="bg-[#54B4FF] text-white px-4 py-1 font-light hover:text-[#348dd1] hover:border hover:bg-white hover:border-[#348dd1]" type="button" onClick={() => setProgress(progress + 5)}>Update Progress</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  randomNum: PropTypes.number.isRequired,
};

export default Book;
