const mongoose = require("mongoose");

const FineSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  loanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loans",
    required: true,
  },
  amount: { type: Number, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ["Unpaid", "Paid"], default: "Unpaid" },
  issuedDate: { type: Date, required: true, default: Date.now },
  paidDate: { type: Date, default: null },
},
{
  collection: "Fines",
});

const Fines = mongoose.model("Fine", FineSchema);

module.exports = Fines;

