const express = require("express");
const router = express.Router();
const { Boar } = require("../models/pigmodel");

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
    .then(updatedBoar => {
        if (updatedBoar) {
            res.status(200).json({ message: "Boar updated successfully", boar: updatedBoar });
        } else {
            res.status(404).json({ message: "Boar not found" });
        }
    })
    .catch(error => {
        console.error("Error updating Boar:", error);
        res.status(500).json({ message: "Internal server error" });
    });
});

module.exports = router;
