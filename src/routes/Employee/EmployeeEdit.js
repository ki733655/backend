const express = require("express");
const router = express.Router();
const { Employee }= require("../../models/employeemodel");

router.put("/employee-edit", (req, res) => {
  Employee.findOneAndUpdate(
    { employeeId: req.body.employeeId },
    {
      employeeId: req.body.employeeId || null,
      employeeName: req.body.employeeName || null,
      address: req.body.address || null,
      phoneNumber: req.body.phoneNumber || null,
      joiningDate: req.body.joiningDate || null,
      dutyShift: req.body.dutyShift || null,
      salary: req.body.salary || null,
      jobRole: req.body.jobRole || null,
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedEmployee) => {
      if (updatedEmployee) {
        res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee });
      } else {
        res.status(404).json({ message: "Employee not found" });
      }
    })
    .catch((error) => {
      console.error("Error updating Employee:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

module.exports = router;
