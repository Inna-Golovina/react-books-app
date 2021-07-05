import React, { useContext } from 'react';
import BookContext from '../../context/book/bookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const bookContext = useContext(BookContext);
  const { books } = bookContext;
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books</div>
  );
};

export default BookList;