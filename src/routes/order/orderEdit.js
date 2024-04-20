const express = require("express");
const router = express.Router();
const { Order } = require("../../models/ordermodel");

router.put("/order-edit", (req, res) => {
  Order.findOneAndUpdate(
    { orderId: req.body.orderId },
    {
      orderId: req.body.orderId || null,
      customerName: req.body.customerName || null,
      pigIds: req.body.pigIds || null,
      totalWeight: req.body.totalWeight || null,
      address: req.body.address || null,
      advance: req.body.advance || null,
      finalPayment: req.body.finalPayment || null,
      phoneNumber: req.body.phoneNumber || null,
      comment: req.body.comment || null,
      deliveryDate: req.body.deliveryDate || null,
      deliveryStatus: req.body.deliveryStatus || null,
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedOrder) => {
      if (updatedOrder) {
        res
          .status(200)
          .json({ message: "Order updated successfully", order: updatedOrder });
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    })
    .catch((error) => {
      console.error("Error updating Order:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});


module.exports = router;