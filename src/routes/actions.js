const router = require("express").Router();

const {
  getUserBooks,
  takeBook,
  returnBook,
} = require("../controllers/actions");

router.get("/users/:user_id/books", getUserBooks);

router.post("/users/:user_id/books/:book_id", takeBook);

router.delete("/users/:user_id/books/:book_id", returnBook);

module.exports = router;
