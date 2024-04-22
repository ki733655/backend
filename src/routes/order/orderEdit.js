const express = require("express");
const router = express.Router();
const { Order } = require("../../models/ordermodel");
const {Sale} = require("../../models/salemodel")

router.put("/order-edit", async(req, res) => {
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


});


module.exports = router;