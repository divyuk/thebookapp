import { useState } from "react";

function BookCard({ title, id, handleDelete, handleEdit }) {
  const [toggle, setToggle] = useState(false);
  const [newTitle, setTitle] = useState("");

  function handleToggle() {
    setToggle(true);
  }
  return (
    <>
      <header>
        <button onClick={handleToggle}>✏</button>
        <button onClick={() => handleDelete(id)}>❌</button>
      </header>
      <main>
        <article>
          <img src="../public/vite.svg" alt="Book Image" />
        </article>
        <article>
          <p>{title}</p>
          {toggle && (
            <>
              <h1>Title</h1>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button onClick={handleEdit(id, newTitle)}>Save</button>
            </>
          )}
        </article>
      </main>
    </>
  );
}

export default BookCard;
