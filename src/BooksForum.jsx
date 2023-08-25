import { useState } from "react";

function BooksForum({ handleBooks }) {
  const [bookTitle, setBookTitle] = useState("");
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
