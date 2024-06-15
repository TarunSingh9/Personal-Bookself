import React from 'react';
import "../styles/Bookshelf.css";

const Bookshelf = ({ books }) => (
  <div className="bookshelf">
    {books.map((book, index) => (
      <div key={index} className="bookshelf-book">
        <h3>{book.title}</h3>
        <p>{book.author_name?.[0]}</p>
      </div>
    ))}
  </div>
);

export default Bookshelf;
