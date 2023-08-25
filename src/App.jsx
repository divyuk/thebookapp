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

  const handleDelete = (id, newTitle) => {
    const modifiedBooks = books.filter((book) => book.id != id);
    setBooks([...modifiedBooks]);
  };

  const handleEdit = (id) => {
    const editTitle = books.map((book) => book.id === id);
  };

  return (
    <>
      <BooksForum handleBooks={handleBooks} />
      <Books
        books={books}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
