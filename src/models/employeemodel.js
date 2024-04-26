const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    unique: true,
  },
  employeeName: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  joiningDate: {
    type: Date,
  },
  dutyShift: {
    type: String,
  },
  salary: {
    type: Number,
  },
  jobRole: {
    type: String,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Employee };
