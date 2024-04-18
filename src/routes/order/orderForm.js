const express = require("express");
const router = express.Router();
const {Order} = require("../../models/ordermodel");

// order route -----------------------------------------------------------------------------------
router.post("/submit-form-order", async (req, res) => {
    try {
      // Check if order model is available
      if (!Order) {
        return res.status(500).json({ message: "order model not found" });
      }
  
      // Create a new order document based on the submitted data
      const neworder = new Order({
        orderId: req.body.orderId,
        customerName: req.body.customerName,
        pigIds: req.body.pigIds,
        totalWeight :req.body.totalWeight,
        address: req.body.address,
        advance: req.body.advance,
        finalPayment: req.body.finalPayment,
        phoneNumber: req.body.phoneNumber,
        comment: req.body.comment,
        deliveryDate: req.body.deliveryDate,
        deliveryStatus: req.body.deliveryStatus
      });
  
      // Save the order data to the database
      const data = await neworder.save();
  
      // Send a success response
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  module.exports = router;