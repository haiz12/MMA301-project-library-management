const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  borrowDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date,
    default: null
  },
  status: {
    type: String,
    enum: ['Borrowed', 'Returned', 'Overdue', 'Lost'],
    default: 'Borrowed'
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model('Loan', LoanSchema);
