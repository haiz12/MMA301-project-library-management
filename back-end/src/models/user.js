const mongoose = require("mongoose");

const BorrowedBookSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books",
    required: true,
  },
  borrowDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  returned: { type: Boolean, default: false },
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    studentId: { type: String, unique: true, required: true },
    role: {
      type: String,
      enum: ["student", "admin", "teacher", "librarian"],
      required: true,
    },
    phone: { type: String },
    borrowedBooks: [BorrowedBookSchema],
  },
  {
    collection: "Users",
  }
);

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
