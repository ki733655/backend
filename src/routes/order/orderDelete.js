const express = require("express")
const router =  express.Router();

const {Order} = require("../../models/ordermodel")

router.delete("/order-delete/:orderId", async(req, res) => {
    try {
        const orderId = req.params.orderId;
        console.log("Order ID received:", orderId);
        const data =  await Order.findOneAndDelete({ orderId: orderId });
        console.log("Deleted order data:", data);
        res.json({ success: true }); // Send success response
    } catch (error) {
        console.log("Error deleting order:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" }); // Send error response
    }
});


module.exports = router;
