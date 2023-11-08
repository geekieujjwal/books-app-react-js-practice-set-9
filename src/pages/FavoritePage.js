import React, { useContext } from "react";
import Header from "../components/Header";
import { ContextProvider } from "../contexts/BooksContext";

const FavoritePage = () => {
  const { favoriteBooksArr, setFavoriteBooksArr } = useContext(ContextProvider);

  const handleRemoveFavoriteClick = (book) => {
    // Use filter to create a new array without the book to be removed
    const updatedFavoritesArr = favoriteBooksArr.filter(
      (b) => b.id !== book.id
    );
    setFavoriteBooksArr(updatedFavoritesArr);
  };

  return (
    <div>
      <Header />
      {!favoriteBooksArr.length ? (
        <h1>You have no Favorite Book...</h1>
      ) : (
        <div className="books">
          {favoriteBooksArr.map((book) => {
            const { id, author, image, title } = book;
            return (
              <div key={id} className="individual-book">
                <img src={image} alt="image" className="image" />
                <p>{id}</p>
                <p>Title: {title}</p>
                <p>Author: {author}</p>
                <button
                  onClick={() => handleRemoveFavoriteClick(book)}
                  className="removeFavoriteBtn"
                >
                  Remove from favorites
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
