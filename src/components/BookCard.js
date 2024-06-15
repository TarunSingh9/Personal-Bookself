import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book, onAdd }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>{book.author_name?.[0]}</p>
    <button onClick={() => onAdd(book)}>Add to Bookshelf</button>
  </div>
);

export default BookCard;
