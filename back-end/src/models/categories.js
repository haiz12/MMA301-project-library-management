const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    subCategories: [subCategorySchema],
  },
  {
    collection: "Categories",
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
