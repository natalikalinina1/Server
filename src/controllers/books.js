const Book = require("../models/book");

const getBooks = (req, res) => {
  Book.find({})
    .then((book) => {
      return res.status(200).send(book);
    })
    .catch((error) => {
      return res.status(500).status(error.message);
    });
};

const getBook = (req, res) => {
  const { book_id } = req.params;

  Book.findById(book_id)
    .then((book) => {
      return res.status(200).send(book);
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const createBook = (req, res) => {
  const data = req.body;

  Book.create(data)
    .then((book) => {
      return res.status(201).send(book);
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const deleteBook = (req, res) => {
  const { book_id } = req.params;

  Book.findByIdAndDelete(book_id)
    .then((book) => {
      res.status(200).send(`Книга ${book.title} успешно удалена`);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = { getBooks, getBook, createBook, deleteBook };