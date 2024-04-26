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
const orderEdit  = require("./order/orderEdit");
const saleDetails = require("./sales/saleDetails");
const saleSearch = require("./sales/saleSearch");

// orders
const EmployeeForm = require("./Employee/EmployeeForm");
const EmployeeDetail = require("./Employee/EmployeeDetail");
const EmployeeEdit = require ("./Employee/EmployeeEdit");
const EmployeeDelete = require("./Employee/EmployeeDelete");
// const EmployeeSearch = require("./Employee/EmployeeSearch");






router.use(
  pigForm,
  pigCount,
  pigDetails,
  pigDelete,
  pigEdit,
  pigSearch,
  // below are the orders route
  orderForm,
  orderDetail,
  orderSearch,
  orderDelete,
  orderEdit,
  // below is the sale routes
  saleDetails,
  saleSearch,

  // below is the sale routes
  EmployeeForm,
  EmployeeDetail,
  EmployeeEdit,
  EmployeeDelete
  // EmployeeSearch

);

module.exports = router;
