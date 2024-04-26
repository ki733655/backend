const express = require("express");
const router = express.Router();
const { Boar, Sow, Piglets, Khassi } = require("../../models/pigmodel");
const { Sale } = require("../../models/salemodel");

// Boar route -----------------------------------------------------------------------------------
router.post("/submit-form-boar", async (req, res) => {
  try {
    // Check if Boar model is available
    if (!Boar) {
      return res.status(500).json({ message: "Boar model not found" });
    }

    // Check if the provided ID is associated with any sale
    const isPigIdInSale = await Sale.exists({ pigIds: req.body.id });
    if (isPigIdInSale) {
      // If ID is found in Sale, handle the logic here
      return res.status(400).json({ message: "This Boar's ID is already in a sale" });
    }
    // Check if the provided ID is associated with any sale
    const isPigIdInBoar = await Boar.exists({ id: req.body.id });
    if (isPigIdInBoar) {
      // If ID is found in Boar, handle the logic here
      return res.status(401).json({ message: "This Boar's ID is already being entered" });
    }
    // Create a new Boar document based on the submitted data
    const newBoar = new Boar({
      id: req.body.id,
      roomNumber: req.body.roomNumber,
      CSF: req.body.csfDate,
      FMD: req.body.fmdDate,
      Deworm: req.body.dewormDate,
      Weight: req.body.weight,
      note: req.body.note,
    });

    // Save the boar data to the database
    await newBoar.save();

    // Send a success response
    res.json({ message: "Boar data received successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Sow route-------------------------------------------------------------------------------------
router.post("/submit-form-sow", async (req, res) => {
  try {
    if (!Sow) {
      return res.status(500).json({ message: "Sow model not found" });
    }
    // Check if the provided ID is associated with any sale
    const isPigIdInSale = await Sale.exists({ pigIds: req.body.id });
    if (isPigIdInSale) {
      // If ID is found in Sale, handle the logic here
      return res.status(400).json({ message: "This Sow's ID is already in a sale" });
    }
    // Check if the provided ID is associated with any sale
    const isPigIdInSow = await Boar.exists({ id: req.body.id });
    if (isPigIdInSow) {
      // If ID is found in Boar, handle the logic here
      return res.status(401).json({ message: "This Sow's ID is already being entered" });
    }

    const newSow = new Sow({
      id: req.body.id,
      roomNumber: req.body.roomNumber,
      CSF: req.body.csfDate,
      FMD: req.body.fmdDate,
      Deworm: req.body.dewormDate,
      Weight: req.body.weight,
      note: req.body.note,

    });

    await newSow.save();

    // Send a success response
    res.json({ message: "Sow data received successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Piglets route----------------------------------------------------------------------------------
router.post("/submit-form-piglet", async (req, res) => {
  try {
    if (!Piglets) {
      return res.status(500).json({ message: "Piglets model not found" });
    }
    // Check if the provided ID is associated with any sale
    const isPigIdInSale = await Sale.exists({ pigIds: req.body.id });
    if (isPigIdInSale) {
      // If ID is found in Sale, handle the logic here
      return res.status(400).json({ message: "This Piglet's ID is already in a sale" });
    }
    // Check if the provided ID is associated with any sale
    const isPigIdInPiglet = await Piglets.exists({ id: req.body.id });
    if (isPigIdInPiglet) {
      // If ID is found in Boar, handle the logic here
      return res.status(401).json({ message: "This Piglet's ID is already being entered" });
    }

    const newPiglets = new Piglets({
      id: req.body.id,
      motherId: req.body.motherId,
      fatherId: req.body.fatherId,
      dob: req.body.dob,
      gender: req.body.gender,
      roomNumber: req.body.roomNumber,
      swineFever: req.body.swineFever,
      deworming: req.body.deworming,
      weight: req.body.weight,
      note: req.body.note,
    });

    await newPiglets.save();

    // Send a success response
    res.json({ message: "Piglets data received successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Khassi route------------------------------------------------------------------------------------
router.post("/submit-form-khassi", async (req, res) => {
  try {
    if (!Khassi) {
      return res.status(500).json({ message: "Khassi model not found" });
    }
    // Check if the provided ID is associated with any sale
    const isPigIdInSale = await Sale.exists({ pigIds: req.body.id });
    if (isPigIdInSale) {
      // If ID is found in Sale, handle the logic here
      return res.status(400).json({ message: "This Khassi's ID is already in a sale" });
    }
    // Check if the provided ID is associated with any sale
    const isPigIdInKhassi = await Khassi.exists({ id: req.body.id });
    if (isPigIdInKhassi) {
      // If ID is found in Boar, handle the logic here
      return res.status(401).json({ message: "This Khassi's ID is already being entered" });
    }

    const newKhassi = new Khassi({
      id: req.body.id,
      roomNumber: req.body.roomNumber,
      CSF: req.body.csfDate,
      FMD: req.body.fmdDate,
      Deworm: req.body.dewormDate,
      Weight: req.body.weight,
      note: req.body.note,
    });

    await newKhassi.save();

    // Send a success response
    res.json({ message: "Khassi data received successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
