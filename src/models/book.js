const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },

  author: {
    type: String,
    required: true,
    minlength: 2,
  },

  publication_date: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("book", bookSchema);