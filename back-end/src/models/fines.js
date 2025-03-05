const mongoose = require('mongoose');

const FineSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  loanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Paid', 'Unpaid', 'Waived'],
    default: 'Unpaid'
  },
  issuedDate: {
    type: Date,
    default: Date.now
  },
  paidDate: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Fine', FineSchema);
