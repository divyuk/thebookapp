import BookCard from "./BookCard";
function Books({ books, handleDelete, handleEdit }) {
  return (
    <>
      {books.map((book, index) => (
        <span key={index}>
          <BookCard
            title={book.title}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            id={book.id}
          />
        </span>
      ))}
    </>
  );
}

export default Books;
