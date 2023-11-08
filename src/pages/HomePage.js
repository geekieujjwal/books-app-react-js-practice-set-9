import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { ContextProvider } from "../contexts/BooksContext";

const HomePage = () => {
  const { booksArr, setBooksArr, handleAddToFavoriteClick, favoriteBooksArr } =
    useContext(ContextProvider);

  //   const handleAddToFavorite = (book) => {
  //     setIsDisabledButton(true);
  //     handleAddToFavoriteClick(book);
  //   };

  const handleMarkReadBtn = (book) => {
    const bookIndex = booksArr.findIndex((b) => b.id === book.id);
    const updatedBook = { ...book, read: true };
    const updatedBooksArr = [...booksArr];
    updatedBooksArr[bookIndex] = updatedBook;
    setBooksArr(updatedBooksArr);
  };

  return (
    <div>
      <Header />
      {!booksArr.length ? (
        <h1>Books are Loading . . .</h1>
      ) : (
        <div className="books">
          {booksArr.map((book) => {
            const { id, author, image, title, read } = book;
            // Check if the book is in favorites
            const isFavorite = favoriteBooksArr.some(
              (favoriteBook) => favoriteBook.id === book.id
            );
            return (
              <div key={id} className="individual-book">
                <img src={image} alt="image" className="image" />
                <p>{id}</p>
                <p>Title: {title}</p>
                <p>Author: {author}</p>
                <div className="buttons">
                  {read ? (
                    <button disabled>Already read</button>
                  ) : (
                    <button
                      className="markAsReadBtn"
                      onClick={() => handleMarkReadBtn(book)}
                    >
                      Mark as read
                    </button>
                  )}
                  <button
                    onClick={() => handleAddToFavoriteClick(book)}
                    disabled={isFavorite} // Disable the button if it's already in favorites
                    className={!isFavorite ? "addToFavoriteBtn" : ""}
                  >
                    {isFavorite ? "Already in Favorites" : "Add to Favorites"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
