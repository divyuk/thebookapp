import BookCard from "./BookCard";
function Books({ books, handleDelete }) {
  return (
    <>
      {books.map((book, index) => (
        <span key={index}>
          <BookCard
            title={book.title}
            handleDelete={handleDelete}
            id={book.id}
          />
        </span>
      ))}
    </>
  );
}

export default Books;
