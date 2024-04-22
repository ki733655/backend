const express = require("express");
const router = express.Router();
const { Order } = require("../../models/ordermodel");
const { Boar, Sow, Khassi, Piglets } = require("../../models/pigmodel");
const { Sale } = require("../../models/salemodel");

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
      totalWeight: req.body.totalWeight,
      address: req.body.address,
      advance: req.body.advance,
      finalPayment: req.body.finalPayment,
      phoneNumber: req.body.phoneNumber,
      comment: req.body.comment,
      deliveryDate: req.body.deliveryDate,
      deliveryStatus: req.body.deliveryStatus,
    });
    // Save the order data to the database
    const data = await neworder.save();
    // Send a success response
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Order not added " });
  }

  if (req.body.deliveryStatus === "delivered") {
    try {
      const newsale = new Sale({
        orderId: req.body.orderId,
        customerName: req.body.customerName,
        pigIds: req.body.pigIds,
        totalWeight: req.body.totalWeight,
        address: req.body.address,
        advance: req.body.advance,
        finalPayment: req.body.finalPayment,
        phoneNumber: req.body.phoneNumber,
        comment: req.body.comment,
        deliveryDate: req.body.deliveryDate,
        deliveryStatus: req.body.deliveryStatus,
      });
      // Save the order data to the database
      const data = await newsale.save();
      // Send a success response
      console.log(data);
      
    } catch (error) {
      console.log("Sale data not added", error);
      res.status(500).json({ message: "Sale data not added" });
    }
  }

  const pigIdsToDelete = req.body.pigIds.map((id) => String(id));
  try {
    const deleteOperations = [
      Boar.deleteMany({ id: { $in: pigIdsToDelete } }),
      Sow.deleteMany({ id: { $in: pigIdsToDelete } }),
      Khassi.deleteMany({ id: { $in: pigIdsToDelete } }),
      Piglets.deleteMany({ id: { $in: pigIdsToDelete } }),
    ];

    await Promise.all(deleteOperations);
    res.json({ message: "Pig IDs deleted successfully" });
    console.log("pig ids deleted successfully");
  } catch (error) {
    console.error("Error deleting pig IDs:", error);
    res.status(500).json({ message: "Failed to delete pig IDs" });
  }
});

module.exports = router;
