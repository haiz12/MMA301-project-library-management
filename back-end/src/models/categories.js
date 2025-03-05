const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }
});

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Vui lòng nhập tên danh mục'],
    unique: true,
    trim: true
  },
  subcategories: [SubcategorySchema]
});

module.exports = mongoose.model('Category', CategorySchema);
