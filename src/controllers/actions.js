const User = require("../models/user");
const Book = require("../models/book");

const takeBook = async (req, res) => {
  const { user_id, book_id } = req.params;

  try {
    const book = await Book.findById(book_id);
    if (!book) {
      return res.status(404).send("Книга не найдена");
    }

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).send("Пользователь не найден");
    }

    User.findByIdAndUpdate(user_id, { $addToSet: { books: book_id } }, { new: true, runValidators: true }).then((user) => {
      return res.status(200).send(`Книга успешно добавлена пользователю ${user.username}`);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const returnBook = async (req, res) => {
  const { user_id, book_id } = req.params;

  try {
    const book = await Book.findById(book_id);
    if (!book) {
      return res.status(404).send("Книга не найдена");
    }

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).send("Пользователь не найден");
    }

    User.findByIdAndUpdate(user_id, { $pull: { books: book_id } }, { new: true, runValidators: true }).then((user) => {
      return res.status(200).send(`Книга успешно удалена у пользователя ${user.username}`);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  takeBook,
  returnBook,
};