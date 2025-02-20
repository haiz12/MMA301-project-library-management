const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, default: "" },
  reviewDate: { type: Date, required: true, default: Date.now },
},
{
  collection: "Reviews",
});

const Reviews = mongoose.model("Review", ReviewSchema);

module.exports = Reviews;