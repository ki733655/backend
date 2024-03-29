const express = require("express");
const router = express.Router();
const { Boar } = require("../models/pigmodel");

router.delete("/boar-delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log("ID received:", id);
  
    try {
    
    await Boar.deleteOne({ id: id });
      // Respond with a success message or appropriate status code
      res.status(200).json({ message: `Data with ID ${id} deleted successfully` });
    } catch (error) {
      // Handle any errors and respond with an appropriate status code and error message
      console.error("Error deleting data:", error);
      res.status(500).json({ error: "An error occurred while deleting the data" });
    }
  });
  

module.exports = router;
