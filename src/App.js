import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
