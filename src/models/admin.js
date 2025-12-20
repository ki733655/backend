const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define schema for admin data
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Define comparePassword method
adminSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Create mongoose model
const Admin = mongoose.model("Admin", adminSchema);
module.exports = { Admin };
