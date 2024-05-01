const express = require("express");
const { Sale } = require("../../models/salemodel");
const {Bar} = require("../../models/barmodel")


const router = express.Router();

// Dummy sales data
// const salesData = [
//     { month: 'Jan', totalSales: 1000 },
//     { month: 'Feb', totalSales: 1500 },
//     { month: 'Mar', totalSales: 2000 },
//     { month: 'Apr', totalSales: 6236 },
//     { month: 'May', totalSales: 65526 },
//     { month: 'June', totalSales:32155 },
//     { month: 'July', totalSales: 3243 },
//     { month: 'Aug', totalSales: 34213 },
//     { month: 'Sep', totalSales: 0 },
//     { month: 'Oct', totalSales: 0 },
//     { month: 'Nov', totalSales: 0 },
//     { month: 'Dec', totalSales: 0 },
//     // Add more months and sales data as needed
//   ];

router.get("/sales-by-month", async(req, res) => {
    try{
       const salesData = await Bar.find()
        res.json(salesData);
    }catch(error){
        console.log(error)
    }
})

module.exports = router;
