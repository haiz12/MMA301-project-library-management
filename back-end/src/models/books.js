const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Vui lòng nhập tên sách'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Vui lòng nhập tên tác giả'],
    trim: true
  },
  isbn: {
    type: String,
    required: [true, 'Vui lòng nhập mã ISBN'],
    unique: true,
    trim: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  country: {
    type: String,
    trim: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  copies: {
    type: Number,
    required: true,
    default: 1
  },
  available: {
    type: Number,
    required: true,
    default: 1
  },
  location: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Mới', 'Đã mượn', 'Đã trả', 'Hỏng', 'Mất'],
    default: 'Mới'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Tạo index cho tìm kiếm
BookSchema.index({ title: 'text', author: 'text', description: 'text' });

module.exports = mongoose.model('Book', BookSchema);
