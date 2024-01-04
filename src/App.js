import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookDetail from "./components/BookDetail";

const Home = () => {
  return <h2>This is the home page.</h2>;
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books List</Link>
            </li>
            <li>
              <Link to="/books/add">Add Book</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/add" element={<BookForm />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
