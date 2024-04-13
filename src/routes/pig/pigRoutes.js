const express = require("express");
const router = express.Router();
const { Boar, Sow , Piglets, Khassi} = require("../../models/pigmodel");

// Boar route -----------------------------------------------------------------------------------
router.post("/submit-form-boar", async (req, res) => {
  try {
    // Check if Boar model is available
    if (!Boar) {
      return res.status(500).json({ message: "Boar model not found" });
    }

    // Create a new Boar document based on the submitted data
    const newBoar = new Boar({
      id: req.body.id,
      roomNumber: req.body.roomNumber,
      CSF: req.body.csfDate,
      FMD: req.body.fmdDate,
      Deworm: req.body.dewormDate,
      Weight: req.body.weight,
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

//Sow route-------------------------------------------------------------------------------------
router.post("/submit-form-sow", async (req, res) => {
  try {
    if (!Sow) {
      return res.status(500).json({ message: "Sow model not found" });
    }

    const newSow = new Sow({
      id: req.body.id,
      roomNumber: req.body.roomNumber,
      CSF: req.body.csfDate,
      FMD: req.body.fmdDate,
      Deworm: req.body.dewormDate,
      Weight: req.body.weight,
    });

    await newSow.save();

    // Send a success response
    res.json({ message: "Sow data received successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Piglets route----------------------------------------------------------------------------------
router.post("/submit-form-piglet", async (req, res) => {
  try {
    if (!Piglets) {
      return res.status(500).json({ message: "Sow model not found" });
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
    });

    await newPiglets.save();

    // Send a success response
    res.json({ message: "Piglets data received successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/submit-form-khassi", async (req, res) => {
  try {
    if (!Khassi) {
      return res.status(500).json({ message: "Khassi model not found" });
    }

    const newKhassi = new Khassi({
      id: req.body.id,
      roomNumber: req.body.roomNumber,
      CSF: req.body.csfDate,
      FMD: req.body.fmdDate,
      Deworm: req.body.dewormDate,
      Weight: req.body.weight,
    });

    await newKhassi.save();

    // Send a success response
    res.json({ message: "Khassi data received successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
} )
module.exports = router;
