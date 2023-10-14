const User = require("../models/user");

const getUserBooks = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      const userBooks = user.borrowedBooks;
      return response.status(200).json(userBooks);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ message: "Что-то пошло не так" });
    });
};

const takeBook = (request, response) => {
  const { user_id } = request.params;
  const { book_id } = request.params;
  return User.findByIdAndUpdate(
    user_id,
    { $addToSet: { borrowedBooks: book_id } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      return response.status(201).json(user);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ message: "Что-то пошло не так" });
    });
};

const returnBook = (request, response) => {
  const { user_id } = request.params;
  const { book_id } = request.params;
  return User.findByIdAndUpdate(
    user_id,
    { $pull: { borrowedBooks: book_id } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      return response.status(204).json(user);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ message: "Что-то пошло не так" });
    });
};

module.exports = {
  getUserBooks,
  takeBook,
  returnBook,
};
