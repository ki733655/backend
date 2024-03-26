// Placeholder Express routes for items
const express = require('express');
const router = express.Router();
const pigsRoutes = require("./pigRoutes")
const pigCount = require("./pigCount")

router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Pig entry route 
  router.use(pigsRoutes,pigCount)



module.exports = router;
