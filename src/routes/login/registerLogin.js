const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const { Admin } = require("../../models/admin");

// Registration route
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log('Password received from request:', password); // Add this logging statement

    // Check if username already exists
    const existingUser = await Admin.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Here, 10 is the number of salt rounds

    // Create a new user
    const newUser = new Admin({
      username,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error while registering user", error);
    res.status(500).json({ message: "Error while registering user" });
  }
});

module.exports = router;
