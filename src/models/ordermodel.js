
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String, Number,
    unique: true,
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

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
