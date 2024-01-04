import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((i) => (
          <li key={i._id}>
            <Link to={`/books/${i._id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
