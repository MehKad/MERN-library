import React, { useState } from "react";
import axios from "axios";
import "../style/BookForm.css";

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
    <div className="book-form-container">
      <h2 className="book-form-header">Add Book</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAddBook} className="add-book-button">
        Add Book
      </button>
    </div>
  );
};

export default BookForm;
