import { createContext, useCallback, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const BooksContext = createContext();

// Custom Provider
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchData = useCallback(async () => {
    const resp = await axios.get("http://localhost:3000/books");
    setBooks(resp.data);
  }, []);

  const handleBooks = async (book) => {
    const newBook = { id: uuidv4(), title: book };
    const response = await axios.post("http://localhost:3000/books", newBook);
    console.log(response);
    setBooks([...books, response.data]);
  };

  const handleDelete = async (id) => {
    // fetch(`http://localhost:3000/books?${id}`, {
    //   method: "DELETE",
    // });
    await axios.delete(`http://localhost:3000/books/${id}`);
    const modifiedBooks = books.filter((book) => book.id != id);
    setBooks(modifiedBooks);
  };

  const handleEdit = async (id, newTitle) => {
    const resp = await axios.put(`http://localhost:3000/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...resp.data }; // Update the title of the specific book
      }
      return book; // Keep other books unchanged
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    handleBooks,
    handleDelete,
    handleEdit,
    fetchData,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

// Named Export
export { Provider };

// Default Export
export default BooksContext;

// So If you want to export both
// import BooksContext , {Provider} from "../.."
