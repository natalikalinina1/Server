const router = require("express").Router();

const { getBooks, getBook, createBook, deleteBook } = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/books", createBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;