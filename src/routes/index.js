// Placeholder Express routes for items
const express = require('express');
const router = express.Router();
const pigsRoutes = require("./pigRoutes")

router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Pig entry route 
  router.use(pigsRoutes)



module.exports = router;
