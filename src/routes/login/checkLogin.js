// authRoutes.js

const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const { Admin } = require("../../models/admin");
const config = require('./config');

// Middleware to parse JSON bodies
router.use(bodyParser.json());

// Login route -----------------------------------------------------------------------------------
router.post("/check-login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Find admin by username
    const admin = await Admin.findOne({ username });

    // Check if admin exists
    if (!admin) {
      return res.status(404).json({ message: "User not found. Please check your username." });
    }

    // Check if password matches
    const passwordMatch = await admin.comparePassword(password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password. Please try again." });
    }

    // Create JWT token
    const token = jwt.sign({ id: admin._id, username: admin.username }, config.secretKey, { expiresIn: '1h' });

    // Login successful, send token in response
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error while login", error);
    res.status(500).json({ message: "Error while login" });
  }
});

module.exports = router;
