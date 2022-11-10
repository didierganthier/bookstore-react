import React from 'react';
import { Link } from 'react-router-dom';
import books from '../assets/books.png';

const Navbar = () => (

  <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" className="flex items-center">
        <img src={books} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap">Bookstore CMS</span>
      </a>
      <div className="flex md:order-2">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Get started</button>
      </div>
      <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <Link to="/" className="flex items-center px-2 py-1 text-gray-900 rounded-lg hover:bg-gray-100 text-xl">Books</Link>
          <Link to="/categories" className="flex items-center px-2 py-1 text-gray-900 rounded-lg hover:bg-gray-100 text-xl">Categories</Link>
        </ul>
      </div>
    </div>
  </nav>

);

export default Navbar;
