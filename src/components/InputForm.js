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
    <form>
      <input
        type="text"
        value={book.title || ''}
        className="input-text"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={book.author || ''}
        className="input-text"
        placeholder="Author"
        name="author"
        onChange={handleInputChange}
      />
      <select name="category" id="categories" onChange={handleInputChange}>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="button" onClick={saveBook}>ADD BOOK</button>
    </form>
  );
}
