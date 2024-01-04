const express = require("express");
const router = express.Router();
const apiControllers = require("../controllers/apiControllers");

router.get("/books", apiControllers.getAllBooks);
router.post("/books", apiControllers.addBook);
router.get("/books/:id", apiControllers.getBookById);
router.put("/books/:id", apiControllers.updateBook);
router.delete("/books/:id", apiControllers.deleteBook);

module.exports = router;
