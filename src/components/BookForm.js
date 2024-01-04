import React, { useState } from "react";
import axios from "axios";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddBook = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/books", {
        title,
        author,
      });
      alert("Book added");
      setTitle("");
      setAuthor("");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookForm;
