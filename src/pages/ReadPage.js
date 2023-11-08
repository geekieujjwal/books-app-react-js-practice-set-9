import React, { useContext } from "react";
import Header from "../components/Header";
import { ContextProvider } from "../contexts/BooksContext";

const ReadPage = () => {
  const { booksArr, setBooksArr } = useContext(ContextProvider);

  const handleClick = (book) => {
    const bookIndex = booksArr.findIndex((b) => b.id === book.id);
    const updatedBook = { ...book, read: false };
    const updatedBooksArr = [...booksArr];
    updatedBooksArr[bookIndex] = updatedBook;
    setBooksArr(updatedBooksArr);
  };

  const readBooksArr = booksArr.filter(({ read }) => read);
  return (
    <div>
      <Header />
      {!readBooksArr.length ? (
        <h1>You haven't read any Book yet...</h1>
      ) : (
        <div className="books">
          {readBooksArr.map((book) => {
            const { id, author, image, title, read } = book;
            return (
              <div key={id} className="individual-book">
                <img src={image} alt="image" className="image" />
                <p>{id}</p>
                <p>Title: {title}</p>
                <p>Author: {author}</p>
                <button
                  onClick={() => handleClick(book)}
                  className="markAsUnreadBtn"
                >
                  Mark as Unread
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReadPage;
