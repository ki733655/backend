const express = require("express");
const { Employee } = require("../../models/employeemodel");
const router = express.Router();

// order route -----------------------------------------------------------------------------------
router.post("/submit-form-employee", async (req, res) => {
  try {
    // Check if Employee model is defined properly
    if (!Employee || !Employee.schema.paths.employeeId) {
      return res.status(500).json({ message: "Employee model not defined properly" });
    }

    // Create a new employee document based on the submitted data
    const newEmployee = new Employee({
      employeeId: req.body.employeeId,
      employeeName: req.body.employeeName,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      joiningDate: req.body.joiningDate,
      dutyShift: req.body.dutyShift,
      salary: req.body.salary,
      jobRole: req.body.jobRole,
    });

    // Save the employee data to the database
    const data = await newEmployee.save();

    // Send a success response
    console.log(data);
    res.status(200).json({ message: "Employee added successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add employee" });
  }
});

module.exports = router;
