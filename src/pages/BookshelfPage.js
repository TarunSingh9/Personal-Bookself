import React from 'react';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';
import '../styles/BookshelfPage.css';

const BookshelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default BookshelfPage;
