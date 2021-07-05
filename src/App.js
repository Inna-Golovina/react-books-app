import React from 'react';
import BookList from './components/books/BookList';
import BookState from './context/book/BookState';
import Navbar from './components/layout/Navbar';
import BookForm from './components/books/BookForm';

function App() {
  return (
    <div className="App">
      <BookState>
        <Navbar />
        <BookForm />
        <BookList />
      </BookState>
    </div>
  );
}

export default App;