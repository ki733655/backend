const express = require("express");
const { Sale } = require("../../models/salemodel");
const { Bar } = require("../../models/barmodel");

const router = express.Router();

router.get("/add-bar-data", async (req, res) => {
    try {
        const currentYear = new Date().getFullYear(); // Get the current year

        // Define start and end dates for each month of the current year
        const months = [
            { name: "Jan", startDate: new Date(currentYear, 0, 1), endDate: new Date(currentYear, 0, 31) },
            { name: "Feb", startDate: new Date(currentYear, 1, 1), endDate: new Date(currentYear, 1, 29) }, // Change endDate for leap years
            { name: "Mar", startDate: new Date(currentYear, 2, 1), endDate: new Date(currentYear, 2, 31) },
            { name: "Apr", startDate: new Date(currentYear, 3, 1), endDate: new Date(currentYear, 3, 30) },
            { name: "May", startDate: new Date(currentYear, 4, 1), endDate: new Date(currentYear, 4, 31) },
            { name: "Jun", startDate: new Date(currentYear, 5, 1), endDate: new Date(currentYear, 5, 30) },
            { name: "Jul", startDate: new Date(currentYear, 6, 1), endDate: new Date(currentYear, 6, 31) },
            { name: "Aug", startDate: new Date(currentYear, 7, 1), endDate: new Date(currentYear, 7, 31) },
            { name: "Sep", startDate: new Date(currentYear, 8, 1), endDate: new Date(currentYear, 8, 30) },
            { name: "Oct", startDate: new Date(currentYear, 9, 1), endDate: new Date(currentYear, 9, 31) },
            { name: "Nov", startDate: new Date(currentYear, 10, 1), endDate: new Date(currentYear, 10, 30) },
            { name: "Dec", startDate: new Date(currentYear, 11, 1), endDate: new Date(currentYear, 11, 31) }
        ];

        // Loop through each month
        for (const month of months) {
            // Clear existing data for the current month
            await Bar.deleteMany({ month: month.name });

            // Find documents where deliveryDate falls within the current month and year
            const sales = await Sale.find({
                deliveryDate: {
                    $gte: month.startDate,
                    $lte: month.endDate
                },
                $expr: { $eq: [{ $year: "$deliveryDate" }, currentYear] } // Filter by year
            });

            // Log the sales data for debugging
            console.log(`Sales for ${month.name}:`, sales);

            // Perform addition of advance and finalPayment
            let totalSum = 0;
            sales.forEach(sale => {
                totalSum += sale.advance + sale.finalPayment;
            });

            // Save totalSum to Bar model
            const barData = new Bar({
                month: month.name,
                totalSales: totalSum,
            });
            await barData.save();
        }

        res.send("Data added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
