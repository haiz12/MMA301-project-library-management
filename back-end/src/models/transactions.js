const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  type: {
    type: String,
    enum: ["Fine Payment", "Membership Fee", "Other"],
    required: true,
  },
  amount: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
  details: { type: String, default: "" },
},{
    collection: "Payments",
});

const Payments = mongoose.model("Payment", PaymentSchema);  

module.exports = Payments;