const express = require("express");
const mongoose = require("mongoose");
const {Boar,Sow, Piglets, Khassi} = require("../../models/pigmodel")

const router = express.Router();

// boar count route -----------------------------------------------------
router.get("/boar-count", async(req, res) => {
    try {
        const count = await Boar.countDocuments();
        res.json({ count });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
 
})
// sow count route----------------------------------------------------------------
router.get("/sow-count", async(req, res) => {
    try {
        const count = await Sow.countDocuments();
        res.json({ count });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
 
})
// piglets count route----------------------------------------------------------------
router.get("/piglet-count", async(req, res) => {
    try {
        const count = await Piglets.countDocuments();
        res.json({ count });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
 
})
// khassi count route
router.get("/khassi-count", async(req, res) => {
    try {
        const count = await Khassi.countDocuments();
        res.json({ count });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
 
})

module.exports = router;