const express = require("express");
const router = express.Router();
const { Order } = require("../../models/ordermodel");

router.get("/order-search-id", async (req, res) => {
    try {
        const data = req.query.search; // Assuming searchTerm contains the letter to search for
        const results = await Order.find({ orderId: { $regex: new RegExp(`^${data}`, 'i') } });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for order:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});


// route for order search by name----------------------------------------------
router.get("/order-search-customerName", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Order.find({ customerName: { $regex: new RegExp(`^${data}`, 'i') } });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for customer name:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

router.get("/order-search-phoneNumber", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Order.find({ phoneNumber: { $regex: new RegExp(`^${data}`, 'i') } });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for Phone number:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

module.exports = router;