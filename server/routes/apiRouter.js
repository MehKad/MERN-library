const express = require("express");
const router = express.Router();
const apiControllers = require("../controllers/apiControllers");

router.get("/books", apiControllers.getAllBooks);
router.post("/books", apiControllers.addBook);
router.get("/books/:title", apiControllers.getBookByTitle);
router.put("/books/:title", apiControllers.updateBookByTitle);
router.delete("/books/:title", apiControllers.deleteBookByTitle);

module.exports = router;
