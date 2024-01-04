import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list-container">
      <h2 className="book-list-header">Book List</h2>
      <ul className="book-list">
        {books.map((i) => (
          <li key={i._id} className="book-item">
            <Link to={`/books/${i._id}`} className="book-link">
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
