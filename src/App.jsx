import { useState } from "react";

import BooksForum from "./BooksForum";
import { v4 as uuidv4 } from "uuid";
import Books from "./Books";

function App() {
  const [books, setBooks] = useState([]);
  const handleBooks = (book) => {
    const newBook = { id: uuidv4(), title: book };
    setBooks([...books, newBook]);
  };

  const handleDelete = (id) => {
    const modifiedBooks = books.filter((book) => book.id != id);
    setBooks([...modifiedBooks]);
  };
  return (
    <>
      <BooksForum handleBooks={handleBooks} />
      <Books books={books} handleDelete={handleDelete} />
    </>
  );
}

export default App;
