import { useContext } from "react";
import BookCard from "./BookCard";
import BooksContext from "./context/Books";
function Books() {
  const { books } = useContext(BooksContext); // Accessing Context
  return (
    <>
      {books.map((book, index) => (
        <span key={index}>
          <BookCard title={book.title} id={book.id} />
        </span>
      ))}
    </>
  );
}

export default Books;
