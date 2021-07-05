import React, { useContext } from 'react';
import BookContext from '../../context/book/bookContext';

const BookDetails = ({ book }) => {
  const bookContext = useContext(BookContext);
  const { dispatch } = bookContext;
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;