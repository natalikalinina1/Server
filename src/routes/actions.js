const router = require("express").Router();

const { takeBook, returnBook } = require("../controllers/actions");

router.post("/users/:user_id/books/:book_id", takeBook);
router.delete("/users/:user_id/books/:book_id", returnBook);

module.exports = router;