const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    author: { type: String, required: true },
    isbn: { type: String, unique: true, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
    country: { type: String },
    publicationYear: { type: Number },
    copies: { type: Number, default: 1 },
    available: { type: Number, default: 1 },
    location: { type: String },
    imageUrl: { type: String },
  },
  {
    collection: "Books",
  }
);

const Books = mongoose.model("Book", BookSchema);

module.exports = Books;
