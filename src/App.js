import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookDetail from "./components/BookDetail";
import "./style/App.css";

const Home = () => {
  return <h2 className="page-header">This is the home page.</h2>;
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link">
                Books List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books/add" className="nav-link">
                Add Book
              </Link>
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
