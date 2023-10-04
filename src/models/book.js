const mongoose = require("mongoose");

const bookShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  publication_date: {
    type: Number,
    required: true,
  },
  userHoldingBook: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("book", bookShema);
