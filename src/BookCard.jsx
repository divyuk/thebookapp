import { useContext, useState } from "react";
import BooksContext from "./context/Books";

function BookCard({ title, id }) {
  const [toggle, setToggle] = useState(false);
  const [newTitle, setTitle] = useState("");
  const { handleDelete, handleEdit } = useContext(BooksContext);
  function handleToggle() {
    setToggle(true);
  }

  function handleSave() {
    handleEdit(id, newTitle);
    setToggle(false);
  }
  return (
    <>
      <header>
        <button onClick={handleToggle}>✏</button>
        <button onClick={() => handleDelete(id)}>❌</button>
      </header>
      <main>
        <article>
          <img
            src={`https://picsum.photos/seed/${title}/200/200`}
            alt="Book Image"
          />
        </article>
        <article>
          {!toggle && <p>{title}</p>}
          {toggle && (
            <>
              <p>Title</p>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={title}
              />
              <button onClick={handleSave}>Save</button>
            </>
          )}
        </article>
      </main>
    </>
  );
}

export default BookCard;
