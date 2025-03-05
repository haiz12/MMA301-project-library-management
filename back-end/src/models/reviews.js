const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    trim: true
  },
  reviewDate: {
    type: Date,
    default: Date.now
  }
});

// Ngăn người dùng đánh giá một cuốn sách nhiều lần
ReviewSchema.index({ bookId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('Review', ReviewSchema);
