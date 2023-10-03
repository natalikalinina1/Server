const User = require("../models/user");

const getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      return res.status(200).send(user);
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const getUser = (req, res) => {
  const { user_id } = req.params;
  User.findById(user_id)
    .then((user) => {
      return res.status(200).send(user);
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const createUser = (req, res) => {
  const data = req.body;
  User.create(data)
    .then((user) => {
      return res.status(201).send(user);
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const updateUser = (req, res) => {
  const { user_id } = req.params;
  const data = req.body;

  User.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
    .then((user) => {
      return res.status(200).send(user);
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const deleteUser = (req, res) => {
  const { user_id } = req.params;

  User.findByIdAndDelete(user_id)
    .then((user) => {
      return res.status(200).send(`Пользователь ${user.username} успешно удалён `);
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};