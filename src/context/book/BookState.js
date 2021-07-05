import React, { useReducer, useEffect } from 'react';
import BookContext from './bookContext';
import bookReducer from './bookReducer';

const BookState = (props) => {
  // useReducer takes in 3rd argument which is a function that will override the 2nd argument(initial value)
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;