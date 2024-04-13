// Placeholder Express routes for items
const express = require('express');
const router = express.Router();
const pigsRoutes = require("./pig/pigRoutes")
const pigCount = require("./pig/pigCount")
const pigDetails = require("./pig/pigDetails")
const pigDelete = require("./pig/pigDelete")
const pigEdit = require("./pig/pigEdit")
const pigSearch = require("./pig/pigSearch")
// orders
const pigId = require("./orders/pigId")

router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Pig entry route 
  router.use(pigsRoutes,pigCount,pigDetails, pigDelete, pigEdit,pigSearch, pigId)



module.exports = router;
