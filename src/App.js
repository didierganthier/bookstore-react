import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}
