import { useEffect, useState } from "react";
import axios from "axios";
import BooksForum from "./BooksForum";
import { v4 as uuidv4 } from "uuid";
import Books from "./Books";

function App() {
  const [books, setBooks] = useState([]);

  // Side Effect for fetching the data for initial loading of the comp.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/books");
  //     const data = await response.json();
  //     setBooks(data);
  //   };
  //   fetchData();
  // }, []);

  // Side Effect using axios for initial loading of the component.
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("http://localhost:3000/books");
      setBooks(resp.data);
    };
    fetchData();
  }, []);

  const handleBooks = async (book) => {
    const newBook = { id: uuidv4(), title: book };
    const response = await axios.post("http://localhost:3000/books", newBook);
    console.log(response);
    setBooks([...books, response.data]);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/books?${id}`, {
      method: "DELETE",
    });
    const modifiedBooks = books.filter((book) => book.id != id);
    setBooks(modifiedBooks);
  };

  const handleEdit = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }; // Update the title of the specific book
      }
      return book; // Keep other books unchanged
    });
    setBooks(updatedBooks);
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
