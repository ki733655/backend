// orders.js

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    unique: true,
  },
  customerName: {
    type: String,
  },
  pigIds: {
    type: Array, // Assuming pigIds are stored as strings (e.g., ["pig1", "pig2"])
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

const orders = mongoose.model("Order", orderSchema);

module.exports = { orders };
