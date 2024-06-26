// Placeholder Express routes for items
const express = require("express");
const router = express.Router();
// login
const checkLogin = require("../routes/login/checkLogin");
const registerLogin = require("../routes/login/registerLogin");
// pigs
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
const orderEdit = require("./order/orderEdit");
// const orderecel = require("./orderexcel");
const saleDetails = require("./sales/saleDetails");
const saleSearch = require("./sales/saleSearch");

// orders
const EmployeeForm = require("./Employee/EmployeeForm");
const EmployeeDetail = require("./Employee/EmployeeDetail");
const EmployeeEdit = require("./Employee/EmployeeEdit");
const EmployeeDelete = require("./Employee/EmployeeDelete");
// const EmployeeSearch = require("./Employee/EmployeeSearch");

const dashboardCount = require("./dashboard/dashboardCount");
const bargraph = require("./dashboard/bargraph");
const barEntry = require("./bargraph/barEntry");
const uploadboar = require ("./Excel/uploadboar")

router.use(
  // login
  registerLogin,
  checkLogin,

  // below is  the pig routes
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
  // orderexcel,

  // below is the sale routes
  saleDetails,
  saleSearch,

  // below is the employee routes
  EmployeeForm,
  EmployeeDetail,
  EmployeeEdit,
  EmployeeDelete,
  // below is the dashboard routes
  dashboardCount,
  bargraph, // this to send the bar data to the frontend
  barEntry,
  uploadboar // for entring the data to the bar model
);

module.exports = router;
