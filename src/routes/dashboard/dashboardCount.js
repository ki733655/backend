const express = require("express");
const { Boar, Sow, Piglets, Khassi } = require("../../models/pigmodel");
const { Employee } = require("../../models/employeemodel");
const { Sale } = require("../../models/salemodel");
const { Order } = require("../../models/ordermodel");

const router = express.Router();

// sale count route -----------------------------------------------------
router.get("/sale-count", async (req, res) => {
    try {
        const sales = await Sale.find(); // Fetch all sales
        let totalAdvance = 0;
        let totalFinalPayment = 0;

        // Calculate total advance and final payment from sales
        sales.forEach(sale => {
            totalAdvance += sale.advance || 0;
            totalFinalPayment += sale.finalPayment || 0;
        });

        // Calculate total payment (advance + finalPayment)
        const totalPayment = totalAdvance + totalFinalPayment;

        // Send response with total advance, total final payment, and total payment
        res.json({totalPayment });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get("/pig-count", async(req, res) => {
    try {
        // Get counts for each type of pig
        const boarCount = await Boar.countDocuments();
        const sowCount = await Sow.countDocuments();
        const pigletCount = await Piglets.countDocuments();
        const khassiCount = await Khassi.countDocuments();

        // Calculate total count
        const totalCount = boarCount + sowCount + pigletCount + khassiCount;

        // Send response with total count
        res.json({ totalCount });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get("/order-count", async(req, res) => {
    try{
        const orderCount = await Order.countDocuments({
            deliveryStatus : "pending"
        });
        res.json({ orderCount });
    }catch(error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get("/employee-count", async(req, res) => {
    try{
        const employeeCount = await Employee.countDocuments();
        res.json({ employeeCount });
    }catch(error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;
