const express = require("express")
const router =  express.Router();

const {Employee} = require("../../models/employeemodel")

router.delete("/employee-delete/:employeeId", async(req, res) => {
    try {
        const employeeId = req.params.employeeId;
        console.log("Employee ID received:", employeeId);
        const data =  await Employee.findOneAndDelete({ employeeId: employeeId });
        console.log("Deleted employee data:", data);
        res.json({ success: true }); // Send success response
    } catch (error) {
        console.log("Error deleting employee:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" }); // Send error response
    }
});


module.exports = router;