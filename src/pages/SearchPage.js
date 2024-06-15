import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';
import { Link } from 'react-router-dom';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const handleAddToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="search-page">
      <h1 className='head'>Personal Bookself</h1>
      <BookSearch onAddToBookshelf={handleAddToBookshelf} />
      <Link to="/bookshelf">Go to My Bookshelf</Link>
    </div>
  );
};

export default SearchPage;
