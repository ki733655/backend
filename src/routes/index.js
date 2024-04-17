// Placeholder Express routes for items
const express = require('express');
const router = express.Router();
const pigsRoutes = require("./pig/pigRoutes")
const pigCount = require("./pig/pigCount")
const pigDetails = require("./pig/pigDetails")
const pigDelete = require("./pig/pigDelete")
const pigEdit = require("./pig/pigEdit")
const pigSearch = require("./pig/pigSearch")
const orders = require("./orders/orders")
// orders
const pigId = require("./orders/pigId")

router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Pig entry route 
  router.use(pigsRoutes,pigCount,pigDetails, pigDelete, pigEdit,pigSearch, pigId,orders)
  // router.use("/pigs", pigsRoutes);
  // router.use("/pigs", pigCount);
  // router.use("/pigs", pigDetails);
  // router.use("/pigs", pigDelete);
  // router.use("/pigs", pigEdit);
  // router.use("/pigs", pigSearch);
  // router.use("/orders", pigId);
  // router.use("/orders", orders);
  


module.exports = router;
