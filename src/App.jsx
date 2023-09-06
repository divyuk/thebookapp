import { useContext, useEffect } from "react";

import BooksForum from "./BooksForum";

import Books from "./Books";
import BooksContext from "./context/Books";

function App() {
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

  const { fetchData } = useContext(BooksContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BooksForum />
      <Books />
    </>
  );
}

export default App;
