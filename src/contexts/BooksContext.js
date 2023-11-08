import { createContext, useEffect, useState } from "react";

import { fakeFetch } from "../Data";

export const ContextProvider = createContext();

export const BooksContext = ({ children }) => {
  const [booksArr, setBooksArr] = useState([]);
  const [userObj, setUserObj] = useState({});
  const [favoriteBooksArr, setFavoriteBooksArr] = useState([]);

  const handleAddToFavoriteClick = (book) => {
    // Check if the book is already in favorites
    const isFavorite = favoriteBooksArr.some(
      (favoriteBook) => favoriteBook.id === book.id
    );

    // If the book is not in favorites, add it
    if (!isFavorite) {
      setFavoriteBooksArr((prev) => [...prev, book]);
    }
  };

  useEffect(() => {
    fakeFetch("https://example.com/api/books").then((data) => {
      setBooksArr(data.data.books);
      setUserObj(data.data.user);
    });
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        booksArr,
        setBooksArr,
        userObj,
        handleAddToFavoriteClick,
        favoriteBooksArr,
        setFavoriteBooksArr,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
