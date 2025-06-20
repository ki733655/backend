// Placeholder Express setup
const express = require('express');
const app = express();
const cors = require("cors");
const router = require("./src/routes/index")

// Middleware setup

app.use(cors({ 
  origin: "https://swargarifarm.netlify.app",
  methods: ["GET","POST", "OPTIONS"],
}));
app.use(express.json());

//Database connection

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("DB connection error:", err));


// Routes setup
app.use(router)

module.exports = app;

