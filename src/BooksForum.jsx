import { useContext, useState } from "react";
import BooksContext from "./context/Books";

function BooksForum() {
  const [bookTitle, setBookTitle] = useState("");
  const { handleBooks } = useContext(BooksContext);
  function handleSubmit(e) {
    e.preventDefault();
    handleBooks(bookTitle);
    setBookTitle("");
  }
  return (
    <>
      <header>
        <h1>Add a Book</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <p>
          <input
            type="text"
            id="title"
            onChange={(e) => setBookTitle(e.target.value)}
            value={bookTitle}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BooksForum;
