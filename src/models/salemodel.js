
const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  orderId: {
    type: String, Number,
  },
  customerName: {
    type: String,
  },
  pigIds: {
    type: Array, 
  },
  totalWeight: {
    type: Number,
  },
  address: {
    type: String,
  },
  advance: {
    type: Number,
  },
  finalPayment: {
    type: Number,
  },
  phoneNumber: {
    type: Number,
  },
  comment: {
    type: String,
  },
  deliveryDate: {
    type: Date,
  },
  deliveryStatus: {
    type: String,
    default: "pending",
  },
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = { Sale };
