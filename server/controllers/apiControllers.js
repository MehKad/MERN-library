const Book = require("../models/Book");

const apiControllers = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  addBook: async (req, res) => {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    try {
      const savedBook = await newBook.save();
      res.json(savedBook);
    } catch (error) {
      res.status(400).json({ error: "Bad Request" });
    }
  },

  getBookByTitle: async (req, res) => {
    const { title } = req.params;
    try {
      const book = await Book.findOne({ title });
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateBookByTitle: async (req, res) => {
    const { title } = req.params;
    const { author } = req.body;
    try {
      const updatedBook = await Book.findOneAndUpdate(
        { title },
        { author },
        { new: true }
      );
      if (!updatedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteBookByTitle: async (req, res) => {
    const { title } = req.params;
    try {
      const deletedBook = await Book.findOneAndDelete({ title });
      if (!deletedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(deletedBook);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = apiControllers;
