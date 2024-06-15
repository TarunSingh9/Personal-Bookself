import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import '../styles/BookSearch.css';

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);

  const handleSearch = async () => {
    if (query) {
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        setResults(response.data.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  const handleSuggest = () => {
    const suggestions = results.map(book => book.title);
    setSuggestedBooks(suggestions);
  };

  return (
    <div className="book-search-container">
      <div className="content">
        <div className="description">
          <h2>Introduction</h2>
          <p>
            Personal BookQuest is a user-friendly React application designed for book lovers to search for books and create a personal bookshelf. 
            Using the Open Library API, users can search for books by title, author, or ISBN and view details like the cover, author. The app allows users to add books to their personal bookshelf, which is saved in the browser using 
            localStorage, so the collection remains even after closing the browser. The interface is clean and responsive, making it 
            easy to use on any device. Users can also remove books from their bookshelf, and the changes update immediately.
          </p>
          <div className="search-input-container">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a book"
              className="search-bar"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
          </div>
        </div>
        <div className="image-container">
          <img src="https://i.pinimg.com/736x/9c/79/f1/9c79f1c2ac74767a0966ce70dd2401f5.jpg" alt="Bookshelf" className="image" />
        </div>
      </div>
      <div className="search-results">
        {results.slice(0, 8).map(book => (
          <BookCard key={book.key} book={book} onAdd={onAddToBookshelf} />
        ))}
      </div>
      <div className="suggested-books">
        <h3>Suggested Books:</h3>
        {suggestedBooks.length > 0 ? (
          <ul>
            {suggestedBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        ) : (
          <p>The Great Gatsby, Pride and Prejudice, Moby Dick, War and Peace</p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
