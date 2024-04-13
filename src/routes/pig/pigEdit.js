const express = require("express");
const router = express.Router();
const { Boar, Sow, Piglets, Khassi } = require("../../models/pigmodel");

router.put("/boar-edit", (req, res) => {
  Boar.findOneAndUpdate(
    { id: req.body.id },
    {
      id: req.body.id || null,
      roomNumber: req.body.roomNumber || null,
      CSF: req.body.CSF || null,
      FMD: req.body.FMD || null,
      Deworm: req.body.Deworm || null,
      Weight: req.body.Weight || null,
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedBoar) => {
      if (updatedBoar) {
        res
          .status(200)
          .json({ message: "Boar updated successfully", boar: updatedBoar });
      } else {
        res.status(404).json({ message: "Boar not found" });
      }
    })
    .catch((error) => {
      console.error("Error updating Boar:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

router.put("/sow-edit", (req, res) => {
  Sow.findOneAndUpdate(
    { id: req.body.id },
    {
      id: req.body.id || null,
      roomNumber: req.body.roomNumber || null,
      CSF: req.body.CSF || null,
      FMD: req.body.FMD || null,
      Deworm: req.body.Deworm || null,
      Weight: req.body.Weight || null,
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedSow) => {
      if (updatedSow) {
        res
          .status(200)
          .json({ message: "Sow updated successfully", sow: updatedSow });
      } else {
        res.status(404).json({ message: "Sow not found" });
      }
    })
    .catch((error) => {
      console.error("Error updating Sow:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

router.put("/piglet-edit", (req, res) => {
  Piglets.findOneAndUpdate(
    { id: req.body.id },
    {
      id: req.body.id || null,
      motherId: req.body.motherId  || null,
      fatherId: req.body.fatherId || null,
      dob: req.body.dob || null,
      gender: req.body.gender || null,
      roomNumber: req.body.roomNumber || null,
      swineFever: req.body.swineFever || null,
      deworming: req.body.deworming || null,
      weight: req.body.weight || null,
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedPiglet) => {
      if (updatedPiglet) {
        res
          .status(200)
          .json({
            message: "Piglet updated successfully",
            piglet: updatedPiglet,
          });
      } else {
        res.status(404).json({ message: "Piglet not found" });
      }
    })
    .catch((error) => {
      console.error("Error updating Piglet:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

router.put("/khassi-edit", (req, res) => {
  Khassi.findOneAndUpdate(
    { id: req.body.id },
    {
      id: req.body.id || null,
      roomNumber: req.body.roomNumber || null,
      CSF: req.body.CSF || null,
      FMD: req.body.FMD || null,
      Deworm: req.body.Deworm || null,
      Weight: req.body.Weight || null,
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedKhassi) => {
      if (updatedKhassi) {
        res
          .status(200)
          .json({ message: "Khassi updated successfully", khassi: updatedKhassi });
      } else {
        res.status(404).json({ message: "khassi not found" });
      }
    })
    .catch((error) => {
      console.error("Error updating Khassi:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

module.exports = router;
