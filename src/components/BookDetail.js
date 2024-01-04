import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/books/${id}`
        );
        setBook(response.data);
        setTitle(response.data.title);
        setAuthor(response.data.author);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdateBook = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/books/${id}`,
        { title, author }
      );
      console.log("Book updated:", response.data);
      setTitle("");
      setAuthor("");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDeleteBook = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/books/${id}`
      );
      alert("Book deleted:", response.data);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Detail</h2>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <label>Edit Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Edit Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleUpdateBook}>Update Book</button>
      <br />
      <br />
      <button onClick={handleDeleteBook}>Delete Book</button>
      <br />
    </div>
  );
};

export default BookDetail;
