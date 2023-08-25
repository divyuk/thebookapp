function BookCard({ title, id, handleDelete }) {
  return (
    <>
      <header>
        <button>✏</button>
        <button onClick={() => handleDelete(id)}>❌</button>
      </header>
      <main>
        <article>
          <img src="../public/vite.svg" alt="Book Image" />
        </article>
        <article>
          <p>{title}</p>
        </article>
      </main>
    </>
  );
}

export default BookCard;
