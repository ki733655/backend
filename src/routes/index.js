// Placeholder Express routes for items
const express = require("express");
const router = express.Router();
const pigForm = require("./pig/pigForm");
const pigCount = require("./pig/pigCount");
const pigDetails = require("./pig/pigDetails");
const pigDelete = require("./pig/pigDelete");
const pigEdit = require("./pig/pigEdit");
const pigSearch = require("./pig/pigSearch");
// orders
const orderForm = require("./order/orderForm");
const orderDetail = require("./order/orderDetail");
const orderSearch = require("./order/orderSearch");
const orderDelete = require("./order/orderDelete");
router.use(
  pigForm,
  pigCount,
  pigDetails,
  pigDelete,
  pigEdit,
  pigSearch,
  orderForm,
  orderDetail,
  orderSearch,
  orderDelete
);

module.exports = router;
