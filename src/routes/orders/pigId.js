const { Boar, Sow, Khassi, Piglets } = require("../../models/pigmodel");
const express = require("express");
const router = express.Router();

// Route to search for pig details across all models
router.get("/order-pigs", async (req, res) => {
  const { searchInput } = req.query;

  try {
    const boars = await Boar.find({id : searchInput});

    // const sows = await Sow.find({ name: { $regex: searchInput, $options: "i" } });
    // const khassis = await Khassi.find({ name: { $regex: searchInput, $options: "i" } });
    // const piglets = await Piglets.find({ name: { $regex: searchInput, $options: "i" } });

    const pigDetails = [...boars];
    
    res.status(200).json(pigDetails);
  } catch (error) {
    console.error("Error searching pig details:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
