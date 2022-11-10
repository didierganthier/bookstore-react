import React from 'react';

const Footer = () => (
  <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bottom-0 absolute w-full">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2022
      <a href="/" className="hover:underline">Didier Peran Ganthier™</a>
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="/" className="mr-4 hover:underline md:mr-6 ">Books</a>
      </li>
      <li>
        <a href="/categories" className="mr-4 hover:underline md:mr-6">Categories</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
