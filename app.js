// Placeholder Express setup
const express = require('express');
const app = express();
const cors = require("cors");
const {connectToDatabase} = require("./src/models/pigmodel");
const router = require("./src/routes/index")

// Middleware setup

app.use(cors({ 
  origin: "https://swargarifarm.netlify.app",
  methods: ["GET","POST", "OPTIONS"],
}));
app.use(express.json());

//Database connection
// Database connection setup
connectToDatabase();

// Routes setup
app.use(router)

module.exports = app;

