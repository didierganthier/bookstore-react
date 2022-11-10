import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import categories from '../data/categories';
// import { addBook } from '../redux/books/books';
import { postBook } from '../redux/actions/books';

const initialBookState = {
  item_id: `${uuidv4()}`,
  title: '',
  author: '',
  category: 'Learning',
};

export default function InputForm() {
  const [book, setBook] = useState(initialBookState);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const saveBook = () => {
    /* eslint-disable camelcase */
    const {
      item_id, title, author, category,
    } = book;
    dispatch(postBook(item_id, title, author, category))
      .then(() => {
        setBook(initialBookState);
      });
  };

  return (
    <form className="flex justify-between">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#54B4FF] focus:border-[#54B4FF] block p-2.5 w-1/4"
        type="text"
        value={book.title || ''}
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
      />
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#54B4FF] focus:border-[#54B4FF] block p-2.5 w-1/4"
        type="text"
        value={book.author || ''}
        placeholder="Author"
        name="author"
        onChange={handleInputChange}
      />
      <select name="category" id="categories" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#54B4FF] focus:border-[#54B4FF] block w-1/4 p-2.5">
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="button" className="bg-[#54B4FF] px-5 py-2 w-1/5 text-white hover:bg-white hover:border hover:border-[#54B4FF] hover:text-[#54B4FF]" onClick={saveBook}>ADD BOOK</button>
    </form>
  );
}
