// Placeholder Express routes for items
const express = require('express');
const router = express.Router();
const pigsRoutes = require("./pigRoutes")
const pigCount = require("./pigCount")
const pigDetails = require("./pigDetails")
const pigDelete = require("./pigDelete")
const pigEdit = require("./pigEdit")
const pigSearch = require("./pigSearch")

router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Pig entry route 
  router.use(pigsRoutes,pigCount,pigDetails, pigDelete, pigEdit,pigSearch)



module.exports = router;
