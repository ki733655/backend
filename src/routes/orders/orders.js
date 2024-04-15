const express = require("express");
const router = express.Router();
const {orders} = require("../../models/orders");

// order route -----------------------------------------------------------------------------------
router.post("/submit-form-order", async (req, res) => {
    try {
      // Check if order model is available
      if (!orders) {
        return res.status(500).json({ message: "order model not found" });
      }
  
      // Create a new order document based on the submitted data
      const neworder = new orders({
        orderID: req.body.orderId,
        Customer_name: req.body.customerName,
        type_of_pig: req.body.pigIds,
        Total_weight:req.body.totalWeight,
        Address: req.body.address,
        Advance: req.body.advance,
        Final_payment: req.body.finalPayment,
        Phone_no: req.body.phoneNumber,
        Comment: req.body.comment,
        Delivery_date: req.body.deliveryDate,
        // Delivery_Status: req.body.deliveryStatus
      });
  
      // Save the order data to the database
      await neworder.save();
  
      // Send a success response
      res.json({ message: "order data received successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  module.exports = router